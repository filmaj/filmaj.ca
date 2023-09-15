> my webpage

# Quickstart

    git submodule update --init
    gem install bundler
    bundle install
    bundle exec jekyll serve

# Architecture

Leveraging all AWS.

## DNS

> AWS Route53

## CDN

> AWS Cloudfront

## Static Site Hosting

> AWS S3

- There's a filmaj.ca bucket configured for static hosting, with public GET permissions on it.

# Automation

Leveraging GitHub Actions to build and upload the site to S3. Post-upload it also invalidates changed files in CloudFront.

For details see the [`build.yml` file](./.github/workflows/build.yml).
