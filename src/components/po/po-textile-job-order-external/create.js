import {inject, Lazy} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Service} from './service';


@inject(Router, Service)
export class Create {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.data = {};
    }

    activate(params) {

    }

    list() {
        this.router.navigateToRoute('list');
    }

    save() {
        // this.service.create(this.data)
        //     .then(result => {
        //         this.list();
        //     })
        //     .catch(e => {
        //         console.log(e);
        //         this.error = e;
        //     })
        console.log(this.data);
    }
}