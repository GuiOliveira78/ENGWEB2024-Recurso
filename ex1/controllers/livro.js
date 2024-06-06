var mongoose = require("mongoose")
const { modelName } = require("../models/livro")
var Livro = require("../models/livro")

function compareStrings(a, b) {
    return a.localeCompare(b, undefined, { sensitivity: 'base', ignorePunctuation: true });
}

module.exports.list = async () => {
    return await Livro
        .find()
        .exec();
}

module.exports.findById = id => {
    return Livro
        .findOne({ _id: id })
        .exec();
}

module.exports.findByCharacter = character => {
    return Livro
        .find({ characters: { $regex: character, $options: 'i' } }) // Usa expressão regular para busca case-insensitive
        .exec();
}


module.exports.findByGenre = genre => {
    return Livro
        .find({ genres: { $regex: genre, $options: 'i' } }) // Usa expressão regular para busca case-insensitive
        .exec();
}

module.exports.findGenres = () => {
    return Livro.distinct('genres').then(genres => {
        return genres.sort(compareStrings);
    });
};

module.exports.findCharacters = () => {
    return Livro.distinct('characters').then(characters => {
        return characters.sort(compareStrings);
    });
}

module.exports.createLivro = liv => {
    return Livro.create(liv);
}

module.exports.updateLivro = (id, comp) => {
    return Livro.updateOne({ _id: id }, comp)
}

module.exports.deleteLivro = id => {
    return Livro.findByIdAndDelete({ _id: id });
}