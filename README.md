### Hexlet tests and linter status:
[![Actions Status](https://github.com/SilkinMax/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/SilkinMax/frontend-project-44/actions)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=SilkinMax_frontend-project-44&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=SilkinMax_frontend-project-44)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=SilkinMax_frontend-project-44&metric=bugs)](https://sonarcloud.io/summary/new_code?id=SilkinMax_frontend-project-44)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=SilkinMax_frontend-project-44&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=SilkinMax_frontend-project-44)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=SilkinMax_frontend-project-44&metric=coverage)](https://sonarcloud.io/summary/new_code?id=SilkinMax_frontend-project-44)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=SilkinMax_frontend-project-44&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=SilkinMax_frontend-project-44)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=SilkinMax_frontend-project-44&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=SilkinMax_frontend-project-44)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=SilkinMax_frontend-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=SilkinMax_frontend-project-44)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=SilkinMax_frontend-project-44&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=SilkinMax_frontend-project-44)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=SilkinMax_frontend-project-44&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=SilkinMax_frontend-project-44)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=SilkinMax_frontend-project-44&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=SilkinMax_frontend-project-44)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=SilkinMax_frontend-project-44&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=SilkinMax_frontend-project-44)

В проекте представлено несколько простых игр, где игра задает вопросы и нужно давать правильные ответы в зависимости от правил.
Для запуска игр необходимо:
1) Если у вас не установлен make (иначе переходите к шагу 2):
    a) Запустите PowerShell или командную строку от имени администратора
    b) Скопируйте и вставьте следующую команду, затем нажмите Enter:
        Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    c)В том же окне PowerShell выполните команду: 
        choco install make
2) Клонировать репозиторий : git clone git@github.com:SilkinMax/frontend-project-44.git
3) В корневой папке проекта установить зависиости : make install
4) Можно запускать игры в соостветствии с командами в Makefile (например make brain-even)
P.S. Можно создать глобальную символическую ссылку (если хотим запускать из любой директории в терминале ) : npm link
    После этого можно запускать игры без make (например brain-even, brain-calc)

## Демонстрация работы игры "Проверка на чётность"
https://asciinema.org/a/2vnUomjervOA3XoN

## Демонстрация работы игры "Калькулятор"
https://asciinema.org/a/b9QDgUSvFUYSLqLW

## Демонстрация работы игры "НОД"
https://asciinema.org/a/j0UNebIWf1Z45klu

## Демонстрация работы игры "Арифметическая прогрессия"
https://asciinema.org/a/oqOjCYcDL9Lq9Uqf

## Демонстрация работы игры "Простое ли число?"
https://asciinema.org/a/ianiHvJNcyxrGyKq