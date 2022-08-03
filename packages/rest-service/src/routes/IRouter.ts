/* eslint-disable no-unused-vars */
import express from 'express';
export interface IRouter {
  getRouter(): express.Router;
}
