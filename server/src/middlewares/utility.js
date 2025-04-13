import compression from 'compression';
import morgan from 'morgan';
import express from 'express';

export const utilityMiddleware = (app) => {
  // Compression middleware
  app.use(compression());
  
  // Logging middleware
  app.use(morgan('dev'));
  
  // Body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
}; 