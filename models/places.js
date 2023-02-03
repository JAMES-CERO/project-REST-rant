const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: "https://img.freepik.com/vector-premium/lindo-bebe-gorila-joven-hacker-crimen-animal-anonimo-mono-mono-negro-sosteniendo-rama-arbol-ilustracion-icono-estilo-plano-dibujos-animados-aislado-animal-mascota-etiqueta-engomada-logotipo-vector-premium_451085-29.jpg?w=2000" },
  cuisines: { type: String, required: true },
  city: { type: String, default: 'SomeWhere' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1675, "Surely not that old?!"],
    max: [new Date().getFullYear(), "Hey! Are you from the future!?"]
  },
  comment: [{ type: mongoose.Schema.Types.ObjectId, ref:"Comment"}]
})

placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model("Place", placeSchema)