'use scrict';

module.exports = (sequelize, DataTypes) => {
    const likes = sequelize.define('likes', {
        idLike: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Usuario_idUsuario: DataTypes.INTEGER,   
        Publicacion_idPublicacion: DataTypes.INTEGER,

    }, { tableName: 'likes', timestamps: false });
    return likes;
};
