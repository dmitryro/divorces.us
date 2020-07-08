#!/bin/bash
npx run build
npm audit fix
npx run develop
