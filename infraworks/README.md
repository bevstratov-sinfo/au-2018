Файл im.schema.json содержит описания двух разделов: "Classes" и "Display".

**"Classes"** — описывает вновь создаваемые категории и атрибуты объектов InfraWorks, например:
```
Создание новой категории
{
  "name": "NEW_BUILDINGS",    кодовое название новой категории
  "base": "BUILDINGS"         кодовое название существующей категории InfraWorks
}

Добавление атрибутов
{
  "name": "BUILDINGS",
  "base": "BUILDINGS",
    "Attributes":
    [
      {
      "name": "BLDG_NAME",
      "type": "String"
      },	  
      {	
      "name": "BLDG_TYPE",
      "type": "String"
      },
      {
      "name": "BLDG_PURPOSE",
      "type": "String"
      }
    ]
} 
```
**"Display"** — определяет стиль, порядок и наименования категорий и атрибутов:
```
Определение категории
{
  "name": "NEW_BUILDINGS",
  "displayName": "Новые здания",
  "category": "Здания"
}

Определение атрибутов
{
  "name": "BLDG_NAME",
  "displayName": "Наименование",
  "category": "Данные ГИС",
  "priority": "1001"
},
{
  "name": "BLDG_TYPE",
  "displayName": "Тип",
  "category": "Данные ГИС",
  "priority": "1002"
},
{
  "name": "BLDG_PURPOSE",
  "displayName": "Назначение",
  "category": "Данные ГИС",
  "priority": "1003"
}
```

После того, как вы закончили редактирование файла im.schema.json, сохраните его в папке "unver" и откройте модель InfraWorks.
```
C:\Users\{Имя_пользователя}\Documents\Autodesk InfraWorks Models\{Название_проекта}\{Название_проекта}.files\unver\
```
