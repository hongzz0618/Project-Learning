'use scrict';

module.exports = (sequelize, DataTypes) => {
    const Publicacion = sequelize.define('publicacion', {
        idPublicacion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: DataTypes.STRING,
        precio: DataTypes.STRING,
        info: DataTypes.STRING,
        Usuario_idUsuario: DataTypes.INTEGER,
        img: DataTypes.STRING,
        ubicacion_latitud: DataTypes.STRING,
        ubicacion_longitud: DataTypes.STRING,
        
    }, { tableName: 'publicacion', timestamps: false });
    return Publicacion;
};
