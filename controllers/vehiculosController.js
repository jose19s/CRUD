const controller = {};

// code for lists
controller.list = (req, res) => {
    req.Connection((err, conn) => {
        conn.query('Select * From vehiculo', (err, vehiculos) =>{
            if (err) {
                res.json(err);
            }
            res.render('vehiculos', {
                data: vehiculos
            })
        });
    });
}
//code to save data
controller.save = (req, res) => {
    const data = req.body;

   req.getConnection((err, conn) =>{
    conn.query('INSERT INTO vehiculo set ?', [data], (err, vehiculos) =>{
        res.redirect('/');
    });
   });
};
//end

//code to edit data
controller.edit = (req, res) => {
    const { id } = req.params;
    req-getConnection((err, conn) => {
        conn.query('SELECT * FROM vehiculo WHERE ID = ?', [id], (err, vehiculos) => {
            res.render('customer_edit', {
                data:vehiculos[0]
            });
        });
    });
};
//end

//code to update data
controller.update = (req, res) => {
    const { id } = req.params;
    const newVehiculo = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE vehiculo set ? WHERE ID = ?', [newVehiculo, id], (err, rows) => {
            res.redirect('/');
        });
    });
};
//end

//code to delete data
controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM vehiculos WHERE id = ?', [id], (err, rows) =>{
            res.redirect('/');
        });
    });
};
//end

module.exports = controller;