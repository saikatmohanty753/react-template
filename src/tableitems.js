const thead = [
    {
        heads:[
            'Sl. No.',
            'Name',
            'Phone Number',
            'Email id',
            'Action',
        ]
    }
]

const tbody = [
    {
        id:1,
        value : 'Saikat',
        phone: 9776277659,
        email:'saikat@gmail.com',
        action:''
    },
    {
        id:2,
        value : 'Mohan',
        phone: 8888888888,
        email:'mohan@gmail.com',
        action:'<a className="btn btn-warning btn-sm" href="#"><i className="fa fa-eye"></i></a>'
    },
    {
        id:3,
        value : 'Sanket',
        phone: 666666666,
        email:'sanket@gmail.com',
        action:''
    },
    {
        id:4,
        value : 'Kamlesh',
        phone: 444444444,
        email:'kamlesh@gmail.com',
        action:''
    },
]

export { thead, tbody };