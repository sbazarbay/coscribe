#!/bin/bash

# Function to start a service and log its output
start_service() {
  service_name=$1
  log_file="logs/$service_name.log"
  echo "Starting $service_name, logging to $log_file"
  pnpm nx serve $service_name > $log_file 2>&1 &
}

# Ensure the logs directory exists
mkdir -p logs

# Start services
start_service "auth"
start_service "notes"
start_service "frontend"

# Wait for all background jobs to finish
wait
