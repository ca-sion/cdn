#!/bin/sh

# Turn on maintenance mode
echo 'Command: down'
php artisan down --secret="1630542a-246b-4b66-afa1-dd72a4c43515"

# Clean production server without saving live changes
# git reset --hard
# git clean -df

# Pushing live changes
# git add .
# git commit -m "[Manual commit]: Update from live"
# git push

# Pull from the origin
git pull origin

# Install/update composer dependecies
echo 'Command: composer'
composer install --verbose --prefer-dist --no-progress --no-interaction --no-dev --optimize-autoloader

# Run generate key
# echo 'Command: key'
# php artisan key:generate

# Run storage link
echo 'Command: storage'
php artisan storage:link

# Run database migrations
# echo 'Command: migrate'
# php artisan migrate --force --seed
# --force  Required to run when in production.

# Run database migrations with seed
# echo 'Command: migrate'
# php artisan migrate --force
# --force  Required to run when in production.

# Run database migrations with a new database
# echo 'Command: migrate'
# php artisan migrate:fresh --seed --force

# Clear caches
echo 'Command: cache'
php artisan cache:clear

# Laravel clear expired password reset tokens
# php artisan auth:clear-resets

# Laravel clear and cache routes
# php artisan route:cache

# Laravel clear and cache config
# php artisan config:cache

# Laravel clear and cache views
# php artisan view:cache

echo 'Command: statamic'
# Statamic addons
# php please addons:discover

# Statamic assets
# php please assets:generate-presets
# php please assets:meta
# php please glide:clear

# Statamic stache
php please stache:clear
# php please stache:doctor
# php please stache:refresh
php please stache:warm

# Install node modules
# npm install

# Build assets using Laravel Mix
# npm run production

# Start Cronless schedule
# php artisan schedule:run-cronless

# Turn off maintenance mode
echo 'Command: up'
php artisan up

echo '🚀 Live !'
