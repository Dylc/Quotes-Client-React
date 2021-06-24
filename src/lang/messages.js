import { FormattedMessage } from "react-intl";
import React from "react";

export const SHARED_MESSAGES = {
  next: () => (
    <FormattedMessage
      id="next"
      defaultMessage="Next"
      description="Next"
    />
  ),
  edit: () => (
    <FormattedMessage
      id="edit"
      defaultMessage="Edit"
      description="Edit"
    />
  ),
  send: () => (
    <FormattedMessage
      id="send"
      defaultMessage="Send"
      description="Send"
    />
  ),
  languages: () => (
    <FormattedMessage
      id="languages"
      defaultMessage="Languages"
      description="Languages"
    />
  ),
  addNew: () => (
    <FormattedMessage
      id="addNew"
      defaultMessage="Add New"
      description="Add New"
    />
  ),
  homePageTitle: () => (
    <FormattedMessage
      id="homePageTitle"
      defaultMessage="Quotes"
      description="Quotes"
    />
  ),
};
