'use scrict';

module.exports = (sequelize, DataTypes) => {
    const comentario = sequelize.define('comentario', {
        idComentario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comentario: DataTypes.STRING,
        Usuario_idUsuario: DataTypes.INTEGER,   
        Publicacion_idPublicacion: DataTypes.INTEGER,

    }, { tableName: 'comentario', timestamps: false });
    return comentario;
};
