const controller = {}

controller.list = (req,res)=>{
    
    req.getConnection((err,conn) =>{
         conn.query('Select * from customer',(err,customer_rows) => {
             if(err){
                 res.json(error)
             }
             //console.log(rows)
             res.render('customer', {
                 data: customer_rows    
             })
         })
    })
    //res.send("hello world from controller")
}

controller.save = (req,res)=>{
    const data = req.body
    req.getConnection((err,conn) =>{
         conn.query('INSERT INTO customer set ?',[data],(err,customer_rows) => {
            if(err){
                 res.json(error)
             }
             res.redirect('/')
             
         })
    })
}

controller.delete = (req,res)=>{
    const {id} = req.params
    req.getConnection((err,conn) =>{
         conn.query('DELETE FROM customer WHERE id = ?',[id],(err,customer_rows) => {
            if(err){
                 res.json(error)
             }
             res.redirect('/')
             
         })
    })
}

controller.edit = (req,res)=>{
    const {id} = req.params
   
    req.getConnection((err,conn) =>{
        conn.query('Select * from customer WHERE id = ?',[id],(err,customer_row) => {
            if(err){
                res.json(error)
            }
            console.log(customer_row)
            res.render('customer_edit', {
                data: customer_row[0]    
            })
        })
   })
   
}

controller.update = (req,res)=>{
    const {id} = req.params
    const newCustomer = req.body;  
    console.log(id)
    console.log(newCustomer)
    req.getConnection((err,conn) =>{
        conn.query('UDPATE customer set ? WHERE id = ?',[newCustomer ,id], (err,customer_row) => {
            res.redirect('/')
        })
   })
}
module.exports=controller