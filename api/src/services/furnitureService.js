import Furniture from "../models/Furniture.js"

export default {
    create(furnitureData, ownerId) {
        return Furniture.create({
            ...furnitureData,
            _ownerId: ownerId,
        })
    },

    getAll() {
        return Furniture.find().select({
            description: true,
            price: true,
            img: true
        })
    },

    getOne(id) {
        return Furniture.findById(id)
    },

    update(furnitureId, furnitureData) {
        return Furniture.findByIdAndUpdate(furnitureId, furnitureData, {runValidators: true});
    },

    delete(furnitureId, userId) {
        return Furniture.findByIdAndDelete(furnitureId);
        // return Furniture.deleteOne({id: furnitureId, _ownerId: userId})
    }
}