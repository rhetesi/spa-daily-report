const express = require('express');
const createError = require('http-errors');

const Model = require('../../models/spadatas.model');
const service = require('./service');

// Create a new spadata.
exports.create = (req, res, next) => {
    const validationErrors = new Model(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return service.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

// Get all spadatas
exports.findAll = (req, res, next) => {
    return service.findAll()
        .then(list => {
            res.json(list);
        });
};

// Get one spadata
exports.findOne = (req, res, next) => {
    return service.findOne(req.params.id)
        .then(entity => {
            if (!entity) {
                return next(new createError.NotFound("Spadata is not found"));
            }
            return res.json(entity);
        });
};

// Update a spadata
exports.update = (req, res, next) => {
    const validationErrors = new Model(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return service.update(req.params.id, req.body)
        .then(entity => {
            res.json(entity);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

// Delete a spadata
exports.delete = (req, res, next) => {
    return service.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};