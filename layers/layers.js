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
                            popuplayertitle: 'Przeznaczenia MPZP (WMS)',
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
                            popuplayertitle: 'Dodatkowe informacje powierzchniowe MPZP (WMS)',
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
                            popuplayertitle: 'Dodatkowe informacje liniowe MPZP (WMS)',
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
                            popuplayertitle: 'Dodatkowe informacje punktowe MPZP (WMS)',
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
var format_OUZ_9 = new ol.format.GeoJSON();
var features_OUZ_9 = format_OUZ_9.readFeatures(json_OUZ_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OUZ_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OUZ_9.addFeatures(features_OUZ_9);
var lyr_OUZ_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OUZ_9, 
                style: style_OUZ_9,
                popuplayertitle: 'OUZ',
                interactive: false,
                title: '<img src="styles/legend/OUZ_9.png" /> OUZ'
            });
var format_OUZ_powiekszenie_10 = new ol.format.GeoJSON();
var features_OUZ_powiekszenie_10 = format_OUZ_powiekszenie_10.readFeatures(json_OUZ_powiekszenie_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OUZ_powiekszenie_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OUZ_powiekszenie_10.addFeatures(features_OUZ_powiekszenie_10);
var lyr_OUZ_powiekszenie_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OUZ_powiekszenie_10, 
                style: style_OUZ_powiekszenie_10,
                popuplayertitle: 'OUZ_powiekszenie',
                interactive: false,
                title: '<img src="styles/legend/OUZ_powiekszenie_10.png" /> OUZ_powiekszenie'
            });
var format_WNIOSKILUBIEN_11 = new ol.format.GeoJSON();
var features_WNIOSKILUBIEN_11 = format_WNIOSKILUBIEN_11.readFeatures(json_WNIOSKILUBIEN_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WNIOSKILUBIEN_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WNIOSKILUBIEN_11.addFeatures(features_WNIOSKILUBIEN_11);
var lyr_WNIOSKILUBIEN_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WNIOSKILUBIEN_11, 
                style: style_WNIOSKILUBIEN_11,
                popuplayertitle: 'WNIOSKI LUBIEN',
                interactive: true,
                title: '<img src="styles/legend/WNIOSKILUBIEN_11.png" /> WNIOSKI LUBIEN'
            });
var format_Granicagminy_12 = new ol.format.GeoJSON();
var features_Granicagminy_12 = format_Granicagminy_12.readFeatures(json_Granicagminy_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Granicagminy_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Granicagminy_12.addFeatures(features_Granicagminy_12);
var lyr_Granicagminy_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Granicagminy_12, 
                style: style_Granicagminy_12,
                popuplayertitle: 'Granica gminy',
                interactive: false,
                title: '<img src="styles/legend/Granicagminy_12.png" /> Granica gminy'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PrzeznaczeniaMPZPWMS_1.setVisible(true);lyr_DodatkoweinformacjepowierzchnioweMPZPWMS_2.setVisible(true);lyr_DodatkoweinformacjelinioweMPZPWMS_3.setVisible(true);lyr_DodatkoweinformacjepunktoweMPZPWMS_4.setVisible(true);lyr_Obreb_ewid_Lubien_5.setVisible(true);lyr_Obreb_ewid_SkomielnaBiala_6.setVisible(true);lyr_Obreb_ewid_Tenczyn_7.setVisible(true);lyr_Obreb_ewid_Krzeczow_8.setVisible(true);lyr_OUZ_9.setVisible(true);lyr_OUZ_powiekszenie_10.setVisible(true);lyr_WNIOSKILUBIEN_11.setVisible(true);lyr_Granicagminy_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PrzeznaczeniaMPZPWMS_1,lyr_DodatkoweinformacjepowierzchnioweMPZPWMS_2,lyr_DodatkoweinformacjelinioweMPZPWMS_3,lyr_DodatkoweinformacjepunktoweMPZPWMS_4,lyr_Obreb_ewid_Lubien_5,lyr_Obreb_ewid_SkomielnaBiala_6,lyr_Obreb_ewid_Tenczyn_7,lyr_Obreb_ewid_Krzeczow_8,lyr_OUZ_9,lyr_OUZ_powiekszenie_10,lyr_WNIOSKILUBIEN_11,lyr_Granicagminy_12];
lyr_Obreb_ewid_Lubien_5.set('fieldAliases', {'fid': 'fid', 'idDzialki': 'idDzialki', });
lyr_Obreb_ewid_SkomielnaBiala_6.set('fieldAliases', {'fid': 'fid', 'idDzialki': 'idDzialki', 'Obreb_ewid': 'Obreb_ewid', });
lyr_Obreb_ewid_Tenczyn_7.set('fieldAliases', {'fid': 'fid', 'idDzialki': 'idDzialki', });
lyr_Obreb_ewid_Krzeczow_8.set('fieldAliases', {'fid': 'fid', 'idDzialki': 'idDzialki', 'Obreb_ewid': 'Obreb_ewid', });
lyr_OUZ_9.set('fieldAliases', {'TERYT': 'TERYT', 'LOKALNYID': 'LOKALNYID', 'PRZES_NAZW': 'PRZES_NAZW', 'WERSJA': 'WERSJA', 'POCZ_WERSJ': 'POCZ_WERSJ', 'OZNA_ZMIAN': 'OZNA_ZMIAN', 'ZRO_DANYCH': 'ZRO_DANYCH', 'KAT_ISTNIE': 'KAT_ISTNIE', 'UWAGI': 'UWAGI', 'INFO_DODAT': 'INFO_DODAT', 'KOD10K': 'KOD10K', 'SKROT_KART': 'SKROT_KART', 'KODKST': 'KODKST', 'FOBUD': 'FOBUD', 'FSBUD': 'FSBUD', 'PFBUD': 'PFBUD', 'LICZ_KONDY': 'LICZ_KONDY', 'NAZWA': 'NAZWA', 'NUMPOINTS': 'NUMPOINTS', });
lyr_OUZ_powiekszenie_10.set('fieldAliases', {'TERYT': 'TERYT', 'LOKALNYID': 'LOKALNYID', 'PRZES_NAZW': 'PRZES_NAZW', 'WERSJA': 'WERSJA', 'POCZ_WERSJ': 'POCZ_WERSJ', 'OZNA_ZMIAN': 'OZNA_ZMIAN', 'ZRO_DANYCH': 'ZRO_DANYCH', 'KAT_ISTNIE': 'KAT_ISTNIE', 'UWAGI': 'UWAGI', 'INFO_DODAT': 'INFO_DODAT', 'KOD10K': 'KOD10K', 'SKROT_KART': 'SKROT_KART', 'KODKST': 'KODKST', 'FOBUD': 'FOBUD', 'FSBUD': 'FSBUD', 'PFBUD': 'PFBUD', 'LICZ_KONDY': 'LICZ_KONDY', 'NAZWA': 'NAZWA', 'NUMPOINTS': 'NUMPOINTS', });
lyr_WNIOSKILUBIEN_11.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_Granicagminy_12.set('fieldAliases', {'Nazwa': 'Nazwa', 'TERYT': 'TERYT', });
lyr_Obreb_ewid_Lubien_5.set('fieldImages', {'fid': 'TextEdit', 'idDzialki': 'TextEdit', });
lyr_Obreb_ewid_SkomielnaBiala_6.set('fieldImages', {'fid': 'TextEdit', 'idDzialki': 'TextEdit', 'Obreb_ewid': 'TextEdit', });
lyr_Obreb_ewid_Tenczyn_7.set('fieldImages', {'fid': 'TextEdit', 'idDzialki': 'TextEdit', });
lyr_Obreb_ewid_Krzeczow_8.set('fieldImages', {'fid': 'TextEdit', 'idDzialki': 'TextEdit', 'Obreb_ewid': 'TextEdit', });
lyr_OUZ_9.set('fieldImages', {'TERYT': 'TextEdit', 'LOKALNYID': 'TextEdit', 'PRZES_NAZW': 'TextEdit', 'WERSJA': 'TextEdit', 'POCZ_WERSJ': 'TextEdit', 'OZNA_ZMIAN': 'TextEdit', 'ZRO_DANYCH': 'TextEdit', 'KAT_ISTNIE': 'TextEdit', 'UWAGI': 'TextEdit', 'INFO_DODAT': 'TextEdit', 'KOD10K': 'TextEdit', 'SKROT_KART': 'TextEdit', 'KODKST': 'TextEdit', 'FOBUD': 'TextEdit', 'FSBUD': 'TextEdit', 'PFBUD': 'TextEdit', 'LICZ_KONDY': 'TextEdit', 'NAZWA': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_OUZ_powiekszenie_10.set('fieldImages', {'TERYT': 'TextEdit', 'LOKALNYID': 'TextEdit', 'PRZES_NAZW': 'TextEdit', 'WERSJA': 'TextEdit', 'POCZ_WERSJ': 'TextEdit', 'OZNA_ZMIAN': 'TextEdit', 'ZRO_DANYCH': 'TextEdit', 'KAT_ISTNIE': 'TextEdit', 'UWAGI': 'TextEdit', 'INFO_DODAT': 'TextEdit', 'KOD10K': 'TextEdit', 'SKROT_KART': 'TextEdit', 'KODKST': 'TextEdit', 'FOBUD': 'TextEdit', 'FSBUD': 'TextEdit', 'PFBUD': 'TextEdit', 'LICZ_KONDY': 'TextEdit', 'NAZWA': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_WNIOSKILUBIEN_11.set('fieldImages', {'Lp': 'TextEdit', 'Wnioskowan': 'TextEdit', 'kategoria': 'TextEdit', });
lyr_Granicagminy_12.set('fieldImages', {'Nazwa': 'TextEdit', 'TERYT': 'TextEdit', });
lyr_Obreb_ewid_Lubien_5.set('fieldLabels', {'fid': 'hidden field', 'idDzialki': 'inline label - always visible', });
lyr_Obreb_ewid_SkomielnaBiala_6.set('fieldLabels', {'fid': 'hidden field', 'idDzialki': 'inline label - always visible', 'Obreb_ewid': 'hidden field', });
lyr_Obreb_ewid_Tenczyn_7.set('fieldLabels', {'fid': 'hidden field', 'idDzialki': 'inline label - always visible', });
lyr_Obreb_ewid_Krzeczow_8.set('fieldLabels', {'fid': 'hidden field', 'idDzialki': 'inline label - always visible', 'Obreb_ewid': 'hidden field', });
lyr_OUZ_9.set('fieldLabels', {'TERYT': 'no label', 'LOKALNYID': 'no label', 'PRZES_NAZW': 'no label', 'WERSJA': 'no label', 'POCZ_WERSJ': 'no label', 'OZNA_ZMIAN': 'no label', 'ZRO_DANYCH': 'no label', 'KAT_ISTNIE': 'no label', 'UWAGI': 'no label', 'INFO_DODAT': 'no label', 'KOD10K': 'no label', 'SKROT_KART': 'no label', 'KODKST': 'no label', 'FOBUD': 'no label', 'FSBUD': 'no label', 'PFBUD': 'no label', 'LICZ_KONDY': 'no label', 'NAZWA': 'no label', 'NUMPOINTS': 'no label', });
lyr_OUZ_powiekszenie_10.set('fieldLabels', {'TERYT': 'no label', 'LOKALNYID': 'no label', 'PRZES_NAZW': 'no label', 'WERSJA': 'no label', 'POCZ_WERSJ': 'no label', 'OZNA_ZMIAN': 'no label', 'ZRO_DANYCH': 'no label', 'KAT_ISTNIE': 'no label', 'UWAGI': 'no label', 'INFO_DODAT': 'no label', 'KOD10K': 'no label', 'SKROT_KART': 'no label', 'KODKST': 'no label', 'FOBUD': 'no label', 'FSBUD': 'no label', 'PFBUD': 'no label', 'LICZ_KONDY': 'no label', 'NAZWA': 'no label', 'NUMPOINTS': 'no label', });
lyr_WNIOSKILUBIEN_11.set('fieldLabels', {'Lp': 'inline label - always visible', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_Granicagminy_12.set('fieldLabels', {'Nazwa': 'no label', 'TERYT': 'no label', });
lyr_Granicagminy_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});