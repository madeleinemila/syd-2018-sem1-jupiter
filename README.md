# LevelUp Watch Edition App Development Environment

[![CircleCI](https://circleci.com/gh/twlevelup/syd-2018-sem1-jupiter.svg?style=svg)](https://circleci.com/gh/twlevelup/syd-2018-sem1-jupiter)

This git repo contains all the code you need to prototype apps for the Watch.
Start at the master [wiki](https://github.com/twlevelup/watch_edition/wiki), which contains lots of useful documentation.

The [wiki](https://github.com/twlevelup/watch_edition/wiki) contains lots of useful documentation about what you need installed, continuous integration, your first commit and much more...

See the [Installation Instructions](https://github.com/twlevelup/watch_edition/wiki/Installation)

# Continuous Integration

This project is continuously deployed to GitHub Pages by [Circle CI](https://circleci.com).
You can view this app at [https://twlevelup.github.io/syd-2018-sem1-jupiter/](https://twlevelup.github.io/syd-2018-sem1-jupiter/)

### Before you push

1. Check the CI build, do not pull unless it's passing!
2. Run `git pull --rebase`
3. Fix any merge conflicts
4. Run
    * `./go pre-commit` (OS X)
    * `npm -s run test` (Windows)
    * `docker-compose -f docker-compose.test.yml up` (Docker)

5. Fix any errors
6. Repeat steps 2-5 until all tests have passed and all conflicts have been resolved
7. Run ```git push```

### Checking the build status
You can access the CI server and view the status of the build here [Circle CI](https://circleci.com/gh/twlevelup/syd-2018-sem1-jupiter)

