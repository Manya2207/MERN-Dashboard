import express from 'express';
import mongoose from 'mongoose';
import { data } from './data.js'

const router = express.Router();

import DataSchema from '../model/dataSchema.js'

export const insertData = async () =>{
   
    DataSchema.collection.insert(data, function (err, docs) {
        if (err){ 
            return console.error(err);
        } else {
          console.log("Multiple documents inserted to Collection");
        }
      });
}

export const getData = async (req, res) =>{
  try {
    const resObject = await DataSchema.find();
    res.status(201).json(resObject);
  } catch (err) {
    console.log(err);
  }
}

