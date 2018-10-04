# Autodesk University Russia 2018
### Интероперабельность в среде продуктов Autodesk при моделировании объектов транспортной инфраструктуры 

Описание: Проблемы и трудности в плане обмена данными между продуктами Autodesk внутри проекта, между этапами проекта и между проектами. Предложенные решения реализованы как стандартным функционалом, так и на базе API программных продуктов Autodesk и позволяют автоматизировать процессы передачи данных из одного продукта в другой.

Презентация: [AUR2018_EVSTRATOV.pdf](/ppt/AUR2018_EVSTRATOV.pdf)

#### InfraWorks
##### Работа со структурой данных
Файл im.schema.json необходимо разместить в папке
```
C:\Users\{Имя_пользователя}\Documents\Autodesk InfraWorks Models\{Название_проекта}\{Название_проекта}.files\unver\
```
Подробное описание файла im.schema.json: [README.md](/infraworks/README.md)
1. Пример файла im.schema.json с добавлением новых категорий в проект InfraWorks: [im.schema.json](/infraworks/classes/im.schema.json)
2. Пример файла im.schema.json с добавлением новых атрибутов элементов в проект InfraWorks: [im.schema.json](/infraworks/attributes/im.schema.json)

Список таблиц InfraWorks: [iw-tables.md](/infraworks/iw-tables.md)
##### Примеры использования JavaScript API
1. Экспорт большой модели с нарезкой на тайлы: [tiled-export.js](/infraworks/js-api/tiled-export.js)
2. Экспорт координат расставленных объектов: [xml-coordinates.js](/infraworks/js-api/xml-coordinates.js)

#### 3ds Max
Формирование структуры Revit по параметру: [group-revit.ms](/3dsmax/group-revit.ms)
