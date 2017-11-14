import { bindable, inject, containerless, computedFrom, BindingEngine } from "aurelia-framework";
import { BindingSignaler } from 'aurelia-templating-resources';
import { Service } from "./service";
var moment = require('moment');
var UnitLoader = require('../../../loader/unit-loader');

@containerless()
@inject(Service, BindingSignaler, BindingEngine)
export class DataForm {
    @bindable readOnly = false;
    @bindable data = {};
    @bindable title;
    @bindable selectedUnit;

    constructor(service, bindingSignaler, bindingEngine) {
        this.service = service;
        this.signaler = bindingSignaler;
        this.bindingEngine = bindingEngine;
    }

    controlOptions = {
        label: {
            length: 4
        },
        control: {
            length: 5
        }
    }

    async bind(context) {
        this.context = context;
        this.data = this.context.data;
        this.error = this.context.error;
        this.itemColumns =  [
            { header: "Minggu ke-", value: "weekNumber" },
            { header: "Tanggal Mulai", value: "startDate" },
            { header: "Tanggal Selesai", value: "endDate" },
            { header: "Bulan", value: "monthName" },
            { header: "Effisiensi %", value: "efficiency" },
            { header: "Total Operator", value: "operator" }
        ] ;
        if (this.data && this.data._id && this.data.unitId) {
            for(var item of this.data.items){
                item["monthName"] = this.getMonthName(item.month);
                //console.log(item.monthName);
            }
            this.selectedUnit = await this.service.getUnitById(this.data.unitId);
        }
    }

    deliveryOrderColumns = [] 

    get isYear(){
        return this.data && this.data.year;
    }

    getMonthName(month){
        var monthName = '';
        switch(month){
            case 0:
                monthName = "Januari";
                break;
            case 1:
                monthName = "Februari";
                break;
            case 2:
                monthName = "Maret";
                break;
            case 3:
                monthName = "April";
                break;
            case 4:
                monthName = "Mei";
                break;
            case 5:
                monthName = "Juni";
                break;
            case 6:
                monthName = "Juli";
                break;
            case 7:
                monthName = "Agustus";
                break;
            case 8:
                monthName = "September";
                break;
            case 9:
                monthName = "Oktober";
                break;
            case 10:
                monthName = "November";
                break;
            case 11:
                monthName = "Desember";
                break;
        }
        return monthName;
    }

    get dataDetail(){
        this.data.items = this.data.items || [];
        if(this.data && this.data.year){
            console.log(this.data.items);
            if(this.data.items.length === 0){
                var startDateOfYear = new Date(`${this.data.year}-01-01`);
                var endDateOfYear = new Date(`${this.data.year}-12-31`);
                var totalWeek = Math.ceil((((endDateOfYear - startDateOfYear) / 86400000) + 1)/7);
                for (var i = 1; i <= totalWeek; i++){
                    var startDate = moment().year(this.data.year).day("Monday").week(i).toDate();
                    var endDate = moment().year(this.data.year).day("Friday").week(i).toDate();
                    this.data.items.push({
                        weekNumber: i,
                        startDate: startDate,
                        endDate: endDate,
                        month: startDate.getMonth(),
                        monthName: this.getMonthName(startDate.getMonth()),
                        efficiency : 0,
                        operator : 0
                    })
                }
            }else{
                var efficiency = this.data.items[0].efficiency;
                var operator = this.data.items[0].operator;
                // console.log(this.data.items[efficiency])
                for (var i = 1; i < this.data.items.length; i++){
                    if(this.data.items[i].efficiency == 0 && efficiency != 0)
                        this.data.items[i].efficiency = efficiency;
                    if(this.data.items[i].operator == 0 && operator != 0)
                        this.data.items[i].operator = operator;
                }
            }
        }else{
            if(this.data && this.data.items && this.data.items.length > 0){
                var count = this.data.items.length;
                for(var a = count; a >= 0; a--){
                    this.data.items.splice((a-1), 1);
                }
            }
        }
        return this.data.items;
    }

    selectedUnitChanged(newValue) {
        if (newValue) {
            this.data.unitId = newValue._id;
        }
        else {
            this.data.unitId = null;
        }
    }

    unitView = (unit) => {
        return `${unit.code} - ${unit.name}`
    }

    get unitLoader() {
        return UnitLoader;
    }
}