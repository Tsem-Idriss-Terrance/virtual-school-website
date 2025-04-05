import "react";

declare module "react" {
  interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    form_validator_design?: string;
    response_exclude?: string;
  }

  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    gdev_props?: string;
  }
}
