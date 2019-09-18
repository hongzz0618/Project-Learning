'use scrict';

module.exports = (sequelize, DataTypes) => {
    const Publicacion = sequelize.define('publicacion', {
        idPublicacion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_ES: DataTypes.STRING,
        nombre_EN: DataTypes.STRING,
        nombre_CH: DataTypes.STRING,
        precio: DataTypes.STRING,
        Usuario_idUsuario: DataTypes.INTEGER,
        file: DataTypes.STRING,
        ubicacion_latitud: DataTypes.STRING,
        ubicacion_longitud: DataTypes.STRING,
        Info_ES: DataTypes.STRING,
        Info_EN: DataTypes.STRING,
        Info_CH: DataTypes.STRING,
        
        
    }, { tableName: 'publicacion', timestamps: false });
    return Publicacion;
};
