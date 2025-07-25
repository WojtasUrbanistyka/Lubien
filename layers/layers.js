var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_PrzeznaczeniaMPZPWMS_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_lubien",
                              attributions: ' ',
                              params: {
                                "LAYERS": "mpzp",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Przeznaczenia MPZP (WMS)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PrzeznaczeniaMPZPWMS_1, 1]);
var lyr_DodatkoweinformacjepowierzchnioweMPZPWMS_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_lubien",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dod_info_pow",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Dodatkowe informacje powierzchniowe MPZP (WMS)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DodatkoweinformacjepowierzchnioweMPZPWMS_2, 1]);
var lyr_DodatkoweinformacjelinioweMPZPWMS_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_lubien",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dod_info_lin",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Dodatkowe informacje liniowe MPZP (WMS)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DodatkoweinformacjelinioweMPZPWMS_3, 1]);
var lyr_DodatkoweinformacjepunktoweMPZPWMS_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_lubien",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dod_info_pkt",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Dodatkowe informacje punktowe MPZP (WMS)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DodatkoweinformacjepunktoweMPZPWMS_4, 1]);
var format_Obreb_ewid_Lubien_5 = new ol.format.GeoJSON();
var features_Obreb_ewid_Lubien_5 = format_Obreb_ewid_Lubien_5.readFeatures(json_Obreb_ewid_Lubien_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obreb_ewid_Lubien_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obreb_ewid_Lubien_5.addFeatures(features_Obreb_ewid_Lubien_5);
var lyr_Obreb_ewid_Lubien_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obreb_ewid_Lubien_5, 
                style: style_Obreb_ewid_Lubien_5,
                popuplayertitle: 'Obreb_ewid_Lubien',
                interactive: true,
                title: '<img src="styles/legend/Obreb_ewid_Lubien_5.png" /> Obreb_ewid_Lubien'
            });
var format_Obreb_ewid_SkomielnaBiala_6 = new ol.format.GeoJSON();
var features_Obreb_ewid_SkomielnaBiala_6 = format_Obreb_ewid_SkomielnaBiala_6.readFeatures(json_Obreb_ewid_SkomielnaBiala_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obreb_ewid_SkomielnaBiala_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obreb_ewid_SkomielnaBiala_6.addFeatures(features_Obreb_ewid_SkomielnaBiala_6);
var lyr_Obreb_ewid_SkomielnaBiala_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obreb_ewid_SkomielnaBiala_6, 
                style: style_Obreb_ewid_SkomielnaBiala_6,
                popuplayertitle: 'Obreb_ewid_Skomielna Biala',
                interactive: true,
                title: '<img src="styles/legend/Obreb_ewid_SkomielnaBiala_6.png" /> Obreb_ewid_Skomielna Biala'
            });
var format_Obreb_ewid_Tenczyn_7 = new ol.format.GeoJSON();
var features_Obreb_ewid_Tenczyn_7 = format_Obreb_ewid_Tenczyn_7.readFeatures(json_Obreb_ewid_Tenczyn_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obreb_ewid_Tenczyn_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obreb_ewid_Tenczyn_7.addFeatures(features_Obreb_ewid_Tenczyn_7);
var lyr_Obreb_ewid_Tenczyn_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obreb_ewid_Tenczyn_7, 
                style: style_Obreb_ewid_Tenczyn_7,
                popuplayertitle: 'Obreb_ewid_Tenczyn',
                interactive: true,
                title: '<img src="styles/legend/Obreb_ewid_Tenczyn_7.png" /> Obreb_ewid_Tenczyn'
            });
var format_Obreb_ewid_Krzeczow_8 = new ol.format.GeoJSON();
var features_Obreb_ewid_Krzeczow_8 = format_Obreb_ewid_Krzeczow_8.readFeatures(json_Obreb_ewid_Krzeczow_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obreb_ewid_Krzeczow_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obreb_ewid_Krzeczow_8.addFeatures(features_Obreb_ewid_Krzeczow_8);
var lyr_Obreb_ewid_Krzeczow_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obreb_ewid_Krzeczow_8, 
                style: style_Obreb_ewid_Krzeczow_8,
                popuplayertitle: 'Obreb_ewid_Krzeczow',
                interactive: true,
                title: '<img src="styles/legend/Obreb_ewid_Krzeczow_8.png" /> Obreb_ewid_Krzeczow'
            });
var format_WNIOSKILUBIEN_9 = new ol.format.GeoJSON();
var features_WNIOSKILUBIEN_9 = format_WNIOSKILUBIEN_9.readFeatures(json_WNIOSKILUBIEN_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WNIOSKILUBIEN_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WNIOSKILUBIEN_9.addFeatures(features_WNIOSKILUBIEN_9);
var lyr_WNIOSKILUBIEN_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WNIOSKILUBIEN_9, 
                style: style_WNIOSKILUBIEN_9,
                popuplayertitle: 'WNIOSKI LUBIEN',
                interactive: true,
                title: '<img src="styles/legend/WNIOSKILUBIEN_9.png" /> WNIOSKI LUBIEN'
            });
var format_Granicagminy_10 = new ol.format.GeoJSON();
var features_Granicagminy_10 = format_Granicagminy_10.readFeatures(json_Granicagminy_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Granicagminy_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Granicagminy_10.addFeatures(features_Granicagminy_10);
var lyr_Granicagminy_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Granicagminy_10, 
                style: style_Granicagminy_10,
                popuplayertitle: 'Granica gminy',
                interactive: false,
                title: '<img src="styles/legend/Granicagminy_10.png" /> Granica gminy'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PrzeznaczeniaMPZPWMS_1.setVisible(true);lyr_DodatkoweinformacjepowierzchnioweMPZPWMS_2.setVisible(true);lyr_DodatkoweinformacjelinioweMPZPWMS_3.setVisible(true);lyr_DodatkoweinformacjepunktoweMPZPWMS_4.setVisible(true);lyr_Obreb_ewid_Lubien_5.setVisible(true);lyr_Obreb_ewid_SkomielnaBiala_6.setVisible(true);lyr_Obreb_ewid_Tenczyn_7.setVisible(true);lyr_Obreb_ewid_Krzeczow_8.setVisible(true);lyr_WNIOSKILUBIEN_9.setVisible(true);lyr_Granicagminy_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PrzeznaczeniaMPZPWMS_1,lyr_DodatkoweinformacjepowierzchnioweMPZPWMS_2,lyr_DodatkoweinformacjelinioweMPZPWMS_3,lyr_DodatkoweinformacjepunktoweMPZPWMS_4,lyr_Obreb_ewid_Lubien_5,lyr_Obreb_ewid_SkomielnaBiala_6,lyr_Obreb_ewid_Tenczyn_7,lyr_Obreb_ewid_Krzeczow_8,lyr_WNIOSKILUBIEN_9,lyr_Granicagminy_10];
lyr_Obreb_ewid_Lubien_5.set('fieldAliases', {'fid': 'fid', 'idDzialki': 'idDzialki', });
lyr_Obreb_ewid_SkomielnaBiala_6.set('fieldAliases', {'fid': 'fid', 'idDzialki': 'idDzialki', 'Obreb_ewid': 'Obreb_ewid', });
lyr_Obreb_ewid_Tenczyn_7.set('fieldAliases', {'fid': 'fid', 'idDzialki': 'idDzialki', });
lyr_Obreb_ewid_Krzeczow_8.set('fieldAliases', {'fid': 'fid', 'idDzialki': 'idDzialki', 'Obreb_ewid': 'Obreb_ewid', });
lyr_WNIOSKILUBIEN_9.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', });
lyr_Granicagminy_10.set('fieldAliases', {'Nazwa': 'Nazwa', 'TERYT': 'TERYT', });
lyr_Obreb_ewid_Lubien_5.set('fieldImages', {'fid': 'TextEdit', 'idDzialki': 'TextEdit', });
lyr_Obreb_ewid_SkomielnaBiala_6.set('fieldImages', {'fid': 'TextEdit', 'idDzialki': 'TextEdit', 'Obreb_ewid': 'TextEdit', });
lyr_Obreb_ewid_Tenczyn_7.set('fieldImages', {'fid': 'TextEdit', 'idDzialki': 'TextEdit', });
lyr_Obreb_ewid_Krzeczow_8.set('fieldImages', {'fid': 'TextEdit', 'idDzialki': 'TextEdit', 'Obreb_ewid': 'TextEdit', });
lyr_WNIOSKILUBIEN_9.set('fieldImages', {'Lp': 'TextEdit', 'Wnioskowan': 'TextEdit', });
lyr_Granicagminy_10.set('fieldImages', {'Nazwa': 'TextEdit', 'TERYT': 'TextEdit', });
lyr_Obreb_ewid_Lubien_5.set('fieldLabels', {'fid': 'hidden field', 'idDzialki': 'inline label - always visible', });
lyr_Obreb_ewid_SkomielnaBiala_6.set('fieldLabels', {'fid': 'hidden field', 'idDzialki': 'inline label - always visible', 'Obreb_ewid': 'hidden field', });
lyr_Obreb_ewid_Tenczyn_7.set('fieldLabels', {'fid': 'hidden field', 'idDzialki': 'inline label - always visible', });
lyr_Obreb_ewid_Krzeczow_8.set('fieldLabels', {'fid': 'hidden field', 'idDzialki': 'inline label - always visible', 'Obreb_ewid': 'hidden field', });
lyr_WNIOSKILUBIEN_9.set('fieldLabels', {'Lp': 'inline label - always visible', 'Wnioskowan': 'no label', });
lyr_Granicagminy_10.set('fieldLabels', {'Nazwa': 'no label', 'TERYT': 'no label', });
lyr_Granicagminy_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});