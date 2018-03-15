#!/bin/bash

API="${API_ORIGIN:-https://wdi-library.herokuapp.com}"
URL_PATH="/books"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \

echo
