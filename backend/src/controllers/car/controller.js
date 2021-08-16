const express = require('express');
const createError = require('http-errors');

const Car = require('../../models/car.model');
const carService = require('./service');

// Create a new person.
exports.create = (req, res, next) => {
    const validationErrors = new Car(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return carService.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return carService.findAll()
        .then( cars => {
            res.json(cars);
        });
};

exports.findOne = (req, res, next) => {
    return carService.findOne(req.params.id)
        .then( car => {
            if (!car) {
                return next(new createError.NotFound("Person is not found"));
            }
            return res.json(car);
        });
};

exports.update = (req, res, next) => {
    const validationErrors = new Car(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return carService.update(req.params.id, req.body)
        .then(car => {
            res.json(car);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return carService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
