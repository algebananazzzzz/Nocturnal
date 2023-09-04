# Nocturnal

## Table of Contents

- [About](#about)
- [Configuration](#configuration)
- [Integrations](#integrations)
- [Resources](#resources)
- [Installation](#installation)
- [Deployment](#deployment)
- [License](#license)
- [Contact](#contact)

## About

Nocturnal is a Portfolio template dedicated to empower novice developers to create portfolio sites easily! Page content is sourced from a series of YAML files, providing the flexibility to easily update dynamic content. It simplifies the process of creating and deploying sites to AWS resources using Terraform and GitHub Actions. To see an example of this theme, visit [algebananazzzz.com](https://algebananazzzzz.com/). I strongly encourage visiting [my blog](https://algebananazzzzz.com/blog/nocturnal) containing detailed information on how to configure content files.


## Configuration

Configuration within this template includes Resource Configuration, which involves setting up and customizing the resources deployed, such as CloudFront and S3. It also includes Content Configuration, which focuses on configuring the dynamic page content sourced from YAML files.

1. Resource Configuration.

Resource configuration files are located in `.polymer/.config` and should follow the format {stage}.env.yml (e.g., dev.env.yml for development).

Please refer to the example configuration file for additional information:
[Example Configuration File](.polymer/.config/dev.env.yml)

2. Content Configuration

Content configuration files can be found in the `src/content` directory and defines the page content.

Please modify the provided starter content configuration based on your requirements.


## Integrations

1. Nocturnal utilises the **GatsbyJS framework** to bundle **React** applications into static files for production. Learn more about [GatsbyJS](https://www.gatsbyjs.com). 

2. Nocturnal also integrates with both [TailWindCSS](https://tailwindcss.com) and [Preline](https://preline.co), enhancing your styling capabilities. To add your custom styles, navigate to `src/styles/global.css`.

3. Under gatsby-browser.js, the application is bundled with a dark mode context. This integration enables the application to seamlessly switch between dark and light modes, utilising the ThemeToggler component located at src/components/theme/dark-toggler.js.


## Resources

Here are the resources that Terraform will deploy, along with instructions on how to configure them:

1. **S3 Source Bucket** to store Frontend Site Content

Under deployment, you can choose the name for S3 bucket to be provisioned
```yaml
deployment:
  target_bucket: polymer-bucket
```

2. **Cloudfront Distribution** to serve content. This content delivery network (CDN) distributes content to edge locations worldwide, optimizing load times and user experiences.

Under deployment, you can choose the [price class](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html) and domain configuration for Cloudfront
```yaml
deployment:
  cloudfront:
    price_class: PriceClass_200 # PriceClass_All , PriceClass_200, PriceClass_100
  domain: # optional
    zone_id: Z123456789123D
    aliases:
      - nocturnal.com
    viewer_certificate: arn:aws:acm:us-east-1:123456789
```

## Installation

1. Create a new Gatsby Application from the Nocturnal Template
```shell
gatsby new your_application_name https://github.com/algebananazzzzz/Nocturnal
```

For instructions on installing Gatsby Client, [read more](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/)
```shell
npm install -g gatsby-cli
```


2. Develop your React application
```shell
cd your_application_name/
gatsby develop
```

## Deployment

1. **Build Production Sites**
Execute the following command to build production-ready sites using Gatsby:
```shell
gatsby build
```

2. **Create a GitHub Repository:**
Start by creating a GitHub repository. After that, follow these steps to initialize Git and switch to the `dev` branch:
```
git init
git add -A
git commit
git checkout -b dev
git remote set-url origin https://github.com/{your_repository_name}.git
```

3. **Configure Secrets and Variables:**

For secure and streamline access to AWS and Terraform Cloud, follow these steps to configure secrets and variables within your GitHub repository:

- Click on the `Settings` tab within your repository.
- Navigate to `Secrets` (or `Environments` > `Secrets` depending on your GitHub version).
- Click on `New repository secret` to add secrets or `New repository variable` to add variables.

**Required Secrets:**

1. `AWS_ACCESS_KEY_ID`: Your AWS access key ID.
2. `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key.
3. `TF_API_TOKEN`: Obtain this token by going to your [Terraform Cloud tokens page](https://app.terraform.io/app/settings/tokens).

**Required Variables:**

1. `APPLICATION_NAME`: Set your application's name.
2. `AWS_REGION`: Define the AWS region you're working with.
3. `TF_ORGANISATION`: If not already created, create a Terraform Cloud organization for use.

4. **Push to GitHub**
```shell
git push --set-upstream origin dev
```

With GitHub Actions in place, this push will automatically trigger Terraform Cloud to provision the necessary resources.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
[Provide a way for users to contact you, whether it's an email address, a link to your website, or social media profiles.]


## Contact

For inquiries and further information, feel free to reach out to me through my [portfolio page](https://www.algebananazzzzz.com).
