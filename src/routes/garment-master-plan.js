module.exports = [
    {
        route: '/garment-master-plan/weekly-plan',
        name: 'weekly-plan',
        moduleId: './modules/garment-master-plan/weekly-plan/index',
        nav: true,
        title: 'Master Minggu',
        auth: true,
        settings: {
            group: "g-master-plan",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/garment-master-plan/working-hours-standard',
        name: 'working-hours-standard',
        moduleId: './modules/garment-master-plan/working-hours-standard/index',
        nav: true,
        title: 'Standar Jam Kerja',
        auth: true,
        settings: {
            group: "g-master-plan",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/garment-master-plan/style',
        name: 'style',
        moduleId: './modules/garment-master-plan/style/index',
        nav: true,
        title: 'Master Style',
        auth: true,
        settings: {
            group: "g-master-plan",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/garment-master-plan/booking-order',
        name: 'booking-order',
        moduleId: './modules/garment-master-plan/booking-order/index',
        nav: true,
        title: 'Booking Order',
        auth: true,
        settings: {
            group: "g-master-plan",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/garment-master-plan/standard-hour',
        name: 'standard-hour',
        moduleId: './modules/garment-master-plan/standard-hour/index',
        nav: true,
        title: 'Standard Hour',
        auth: true,
        settings: {
            group: "g-master-plan",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    }

]