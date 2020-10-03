# README

## Initial Setup
Be sure to copy the sample.env and save it as .env. Then, make any updates needed.

* `bundle install`
* `gem install foreman`
* `yarn`
* `rake db:setup`
* `rake db:migrate` (may not be required)
* `rake load_csv`

## Starting via foreman 

`foreman start -f Procfile.dev`
