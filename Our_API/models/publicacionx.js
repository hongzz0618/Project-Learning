'use scrict';
/*
create view publicacionx as 
 select p.*,
 (select count(*) from likes where likes.Publicacion_idPublicacion=idPublicacion) as numLikes ,
  (select count(*) from comentario where comentario.Publicacion_idPublicacion=idPublicacion) as numComent
  from publicacion p ;*/ 
module.exports = (sequelize, DataTypes) => {
    const Publicacionx = sequelize.define('publicacionx', {
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
        numLikes: DataTypes.INTEGER,
        numComent: DataTypes.INTEGER,

        
        
    }, { tableName: 'publicacionx', timestamps: false });
    return Publicacionx;
};
