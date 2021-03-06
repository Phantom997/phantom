module.exports = (sequelize, DataTypes) => {
  const job = sequelize.define(
    'job',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      desc: {
        type: DataTypes.STRING
      },
    },
    {
      timestamps: true
    }
  )

  job.associate = function(models) {

    job.belongsTo(models.user) 

  }

  return job
}
