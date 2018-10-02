var RunTiledExport = function () {

    /// --------------------------------------
    /// ----- Параметры экспорта -------------
    /// --------------------------------------

    // Укажите папку для экспорта 3D-модели: 
    var targetFolder = "C:/_InfraWorksExport/";

    // Выберите формат файла экспорта: FBX, DAE, OBJ
    var fileFormat = "fbx"

    // На сколько частей разбить модель (введите 3, чтобы получить 3х3=9 файлов экспорта).
    var tileGridSize = 12;

    // Что экспортировать (ID таблицы для экспорта конкретной категории или 0, чтобы экспортировать всё). Список ID таблиц — в файле iw-tables.md
    var emptyClassIds = [0];

    // Задайте смещение (X,Y,Z), если необходимо
    var offset3d  = new adsk.Vec3d(0, 0, 0);

    /// --------------------------------------
    /// ----- Скрипт экспорта ----------------
    /// --------------------------------------

    // Проверка, что модель открыта
    var model = app.ActiveModel;
    if (model==undefined) {
        print("Ошибка! Убедитесь, что проект InfraWorks открыт.");
        return;
    }

    // define export area
    var region;

    // Границы модели
    var boundary = model.Boundary;
    if (boundary==undefined) {
        print("Ошибка! Невозможно определить границы модели.");
        return;
    }

    // BBox модели — зона экспорта модели
    region = boundary.BBox2d;
    if (region==undefined) {
        print("Ошибка! Невозможно сформировать границы зоны экспорта.");
        return;
    }
    
    // Определение UCS — пользовательской системы координат проекта
    var srs = app.ActiveModel.UserCoordSysWkt;
    if (srs==undefined) {
        print("Ошибка! Невозможно определить UCS систему координат проекта.");
        return;
    } 
    print("Целевая система координат: " + srs);

    // Расчет размера одного тайла
    var pMin     = region.Min;
    var pMax     = region.Max;
    var diag     = pMax.Sub(pMin);
    var div      = new adsk.Vec2d(tileGridSize, tileGridSize);
    var tileDiag = diag.Div(div);

    // Цикл по тайлам
    for (y = 0; y < tileGridSize; y++) {
        for (x = 0; x < tileGridSize; x++) {

            // Номер тайла
            var tileNumber = y * tileGridSize + x;

            // Зона экспорта тайла
            var tileMin = pMin.Add(new adsk.Vec2d(x * tileDiag.X, y * tileDiag.Y));
            var tileMax = tileMin.Add(tileDiag);
            var tileBox = new adsk.BBox2d(tileMin, tileMax);
            var geom = new adsk.Geometry(tileBox);

            // Имя файла экспорта
            var tileFile = targetFolder + "/iw-export_" + x + "_" + y + "." + fileFormat;
            print("Сохраняется файл: " + tileFile);

            // Экспорт
            model.Export3DModel(tileFile, emptyClassIds, geom, srs, offset3d);
            print("Экспортировано: " + tileNumber + " из " + tileGridSize * tileGridSize);
        }
    }
    print("Экспорт успешно завершен.");
}

RunTiledExport();
