terraform {
  required_providers {
    aws = {
      version = "~> 4.0"
      source  = "hashicorp/aws"
    }
  }
}
provider "aws" {
  region  = "us-west-1"
  profile = "Cloud_Resume.AdministratorAccess"
}