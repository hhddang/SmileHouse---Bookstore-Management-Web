/*
******************************
*                            *
*    KẾT NỐI TỚI DATABASE    *
*         SQL SERVER         *
*                            *
******************************

<!> Yêu cầu: cài đặt mssql và msnodesqlv8
+ Cấu hình database cho việc kết nối.
+ Kết nối tới database.

*/

var sql = require('mssql/msnodesqlv8');

var config = {
    server: 'localhost',        // Giữ nguyên
    user: 'haidang',            // Thay đổi
    password: '12345',          // Thay đổi
    database: 'QuanLyNhaSach3',  // Thay đổi
    driver: 'msnodesqlv8'       // Giữ nguyên
}

const conn = new sql.ConnectionPool(config)
.connect().then(pool => {
    return pool;
});

module.exports = {
    conn: conn,
    sql: sql
}