ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([110.411331, -7.085130, 110.451685, -7.062844]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_export_1 = new ol.format.GeoJSON();
var features_export_1 = format_export_1.readFeatures(json_export_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_export_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_export_1.addFeatures(features_export_1);
var lyr_export_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_export_1, 
                style: style_export_1,
                popuplayertitle: 'export',
                interactive: true,
                title: '<img src="styles/legend/export_1.png" /> export'
            });
var format_Masjid_2 = new ol.format.GeoJSON();
var features_Masjid_2 = format_Masjid_2.readFeatures(json_Masjid_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Masjid_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masjid_2.addFeatures(features_Masjid_2);
var lyr_Masjid_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masjid_2, 
                style: style_Masjid_2,
                popuplayertitle: 'Masjid',
                interactive: true,
                title: '<img src="styles/legend/Masjid_2.png" /> Masjid'
            });
var format_Gereja_3 = new ol.format.GeoJSON();
var features_Gereja_3 = format_Gereja_3.readFeatures(json_Gereja_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Gereja_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gereja_3.addFeatures(features_Gereja_3);
var lyr_Gereja_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gereja_3, 
                style: style_Gereja_3,
                popuplayertitle: 'Gereja',
                interactive: true,
                title: '<img src="styles/legend/Gereja_3.png" /> Gereja'
            });
var format_Sekolah_4 = new ol.format.GeoJSON();
var features_Sekolah_4 = format_Sekolah_4.readFeatures(json_Sekolah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sekolah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_4.addFeatures(features_Sekolah_4);
var lyr_Sekolah_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolah_4, 
                style: style_Sekolah_4,
                popuplayertitle: 'Sekolah',
                interactive: true,
                title: '<img src="styles/legend/Sekolah_4.png" /> Sekolah'
            });
var format_Kesehatan_5 = new ol.format.GeoJSON();
var features_Kesehatan_5 = format_Kesehatan_5.readFeatures(json_Kesehatan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kesehatan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_5.addFeatures(features_Kesehatan_5);
var lyr_Kesehatan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kesehatan_5, 
                style: style_Kesehatan_5,
                popuplayertitle: 'Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/Kesehatan_5.png" /> Kesehatan'
            });
var format_Kelurahan_6 = new ol.format.GeoJSON();
var features_Kelurahan_6 = format_Kelurahan_6.readFeatures(json_Kelurahan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kelurahan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahan_6.addFeatures(features_Kelurahan_6);
var lyr_Kelurahan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelurahan_6, 
                style: style_Kelurahan_6,
                popuplayertitle: 'Kelurahan',
                interactive: true,
                title: '<img src="styles/legend/Kelurahan_6.png" /> Kelurahan'
            });
var group_INSET = new ol.layer.Group({
                                layers: [lyr_export_1,lyr_Masjid_2,lyr_Gereja_3,lyr_Sekolah_4,lyr_Kesehatan_5,lyr_Kelurahan_6,],
                                fold: 'open',
                                title: 'INSET'});

lyr_GoogleSatellite_0.setVisible(true);lyr_export_1.setVisible(true);lyr_Masjid_2.setVisible(true);lyr_Gereja_3.setVisible(true);lyr_Sekolah_4.setVisible(true);lyr_Kesehatan_5.setVisible(true);lyr_Kelurahan_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_INSET];
lyr_export_1.set('fieldAliases', {'id': 'id', '@id': '@id', '@relations': '@relations', 'admin_level': 'admin_level', 'boundary': 'boundary', 'flood_prone': 'flood_prone', 'landslide_prone': 'landslide_prone', 'name': 'name', 'source': 'source', 'type': 'type', });
lyr_Masjid_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kategori': 'Kategori', 'Alamat': 'Alamat', });
lyr_Gereja_3.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kategori': 'Kategori', 'Alamat': 'Alamat', });
lyr_Sekolah_4.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kategori': 'Kategori', 'Alamat': 'Alamat', });
lyr_Kesehatan_5.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kategori': 'Kategori', 'Alamat': 'Alamat', });
lyr_Kelurahan_6.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kategori': 'Kategori', 'Alamat': 'Alamat', });
lyr_export_1.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', '@relations': 'KeyValue', 'admin_level': 'TextEdit', 'boundary': 'TextEdit', 'flood_prone': 'TextEdit', 'landslide_prone': 'TextEdit', 'name': 'TextEdit', 'source': 'TextEdit', 'type': 'TextEdit', });
lyr_Masjid_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kategori': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_Gereja_3.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kategori': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_Sekolah_4.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kategori': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_Kesehatan_5.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kategori': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_Kelurahan_6.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kategori': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_export_1.set('fieldLabels', {'id': 'no label', '@id': 'no label', '@relations': 'no label', 'admin_level': 'no label', 'boundary': 'no label', 'flood_prone': 'no label', 'landslide_prone': 'no label', 'name': 'no label', 'source': 'no label', 'type': 'no label', });
lyr_Masjid_2.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kategori': 'no label', 'Alamat': 'no label', });
lyr_Gereja_3.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kategori': 'no label', 'Alamat': 'no label', });
lyr_Sekolah_4.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kategori': 'no label', 'Alamat': 'no label', });
lyr_Kesehatan_5.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kategori': 'no label', 'Alamat': 'no label', });
lyr_Kelurahan_6.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kategori': 'no label', 'Alamat': 'no label', });
lyr_Kelurahan_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});