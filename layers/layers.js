var wms_layers = [];


    var projection_Ortofotomapastandardowa_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_Ortofotomapastandardowa_0 = projection_Ortofotomapastandardowa_0.getExtent();
    var size_Ortofotomapastandardowa_0 = ol.extent.getWidth(projectionExtent_Ortofotomapastandardowa_0) / 256;
    var resolutions_Ortofotomapastandardowa_0 = new Array(14);
    var matrixIds_Ortofotomapastandardowa_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Ortofotomapastandardowa_0[z] = size_Ortofotomapastandardowa_0 / Math.pow(2, z);
        matrixIds_Ortofotomapastandardowa_0[z] = z;
    }
    var lyr_Ortofotomapastandardowa_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMTS/StandardResolution?service=WMTS&request=getCapabilities",
                                attributions: ' ',
                                "layer": "ORTOFOTOMAPA",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_Ortofotomapastandardowa_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Ortofotomapastandardowa_0),
                resolutions: resolutions_Ortofotomapastandardowa_0,
                matrixIds: matrixIds_Ortofotomapastandardowa_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Ortofotomapa standardowa',
                            opacity: 1.0,
                            
                            
                          });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_studium_kierunki_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_lubien",
                              attributions: ' ',
                              params: {
                                "LAYERS": "studium_kierunki",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'studium_kierunki',
                            popuplayertitle: 'studium_kierunki',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_studium_kierunki_2, 1]);
var lyr_studium_dod_info_pow_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_lubien",
                              attributions: ' ',
                              params: {
                                "LAYERS": "studium_dod_info_pow",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'studium_dod_info_pow',
                            popuplayertitle: 'studium_dod_info_pow',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_studium_dod_info_pow_3, 1]);
var lyr_studium_dod_info_pkt_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_lubien",
                              attributions: ' ',
                              params: {
                                "LAYERS": "studium_dod_info_pkt",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'studium_dod_info_pkt',
                            popuplayertitle: 'studium_dod_info_pkt',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_studium_dod_info_pkt_4, 1]);
var lyr_studium_dod_info_lin_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_lubien",
                              attributions: ' ',
                              params: {
                                "LAYERS": "studium_dod_info_lin",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'studium_dod_info_lin',
                            popuplayertitle: 'studium_dod_info_lin',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_studium_dod_info_lin_5, 1]);
var lyr_mpzp_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_lubien",
                              attributions: ' ',
                              params: {
                                "LAYERS": "mpzp",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'mpzp',
                            popuplayertitle: 'mpzp',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_mpzp_6, 1]);
var lyr_dod_info_pow_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_lubien",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dod_info_pow",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'dod_info_pow',
                            popuplayertitle: 'dod_info_pow',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_dod_info_pow_7, 1]);
var lyr_dod_info_pkt_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_lubien",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dod_info_pkt",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'dod_info_pkt',
                            popuplayertitle: 'dod_info_pkt',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_dod_info_pkt_8, 1]);
var lyr_dod_info_lin_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_lubien",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dod_info_lin",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'dod_info_lin',
                            popuplayertitle: 'dod_info_lin',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_dod_info_lin_9, 1]);
var format_inne_10 = new ol.format.GeoJSON();
var features_inne_10 = format_inne_10.readFeatures(json_inne_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_inne_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_inne_10.addFeatures(features_inne_10);
var lyr_inne_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_inne_10, 
                style: style_inne_10,
                popuplayertitle: 'inne',
                interactive: true,
                title: '<img src="styles/legend/inne_10.png" /> inne'
            });
var format_Obszarograniczonegouzytkowania_11 = new ol.format.GeoJSON();
var features_Obszarograniczonegouzytkowania_11 = format_Obszarograniczonegouzytkowania_11.readFeatures(json_Obszarograniczonegouzytkowania_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obszarograniczonegouzytkowania_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obszarograniczonegouzytkowania_11.addFeatures(features_Obszarograniczonegouzytkowania_11);
var lyr_Obszarograniczonegouzytkowania_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obszarograniczonegouzytkowania_11, 
                style: style_Obszarograniczonegouzytkowania_11,
                popuplayertitle: 'Obszar ograniczonego uzytkowania',
                interactive: true,
                title: '<img src="styles/legend/Obszarograniczonegouzytkowania_11.png" /> Obszar ograniczonego uzytkowania'
            });
var format_Las_12 = new ol.format.GeoJSON();
var features_Las_12 = format_Las_12.readFeatures(json_Las_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Las_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Las_12.addFeatures(features_Las_12);
var lyr_Las_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Las_12, 
                style: style_Las_12,
                popuplayertitle: 'Las',
                interactive: true,
                title: '<img src="styles/legend/Las_12.png" /> Las'
            });
var format_SO_13 = new ol.format.GeoJSON();
var features_SO_13 = format_SO_13.readFeatures(json_SO_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SO_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SO_13.addFeatures(features_SO_13);
var lyr_SO_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SO_13, 
                style: style_SO_13,
                popuplayertitle: 'SO',
                interactive: true,
                title: '<img src="styles/legend/SO_13.png" /> SO'
            });
var format_SC_14 = new ol.format.GeoJSON();
var features_SC_14 = format_SC_14.readFeatures(json_SC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SC_14.addFeatures(features_SC_14);
var lyr_SC_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SC_14, 
                style: style_SC_14,
                popuplayertitle: 'SC',
                interactive: true,
                title: '<img src="styles/legend/SC_14.png" /> SC'
            });
var format_SK_15 = new ol.format.GeoJSON();
var features_SK_15 = format_SK_15.readFeatures(json_SK_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SK_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SK_15.addFeatures(features_SK_15);
var lyr_SK_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SK_15, 
                style: style_SK_15,
                popuplayertitle: 'SK',
                interactive: true,
                title: '<img src="styles/legend/SK_15.png" /> SK'
            });
var format_SI_16 = new ol.format.GeoJSON();
var features_SI_16 = format_SI_16.readFeatures(json_SI_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SI_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SI_16.addFeatures(features_SI_16);
var lyr_SI_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SI_16, 
                style: style_SI_16,
                popuplayertitle: 'SI',
                interactive: true,
                title: '<img src="styles/legend/SI_16.png" /> SI'
            });
var format_SH_17 = new ol.format.GeoJSON();
var features_SH_17 = format_SH_17.readFeatures(json_SH_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SH_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SH_17.addFeatures(features_SH_17);
var lyr_SH_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SH_17, 
                style: style_SH_17,
                popuplayertitle: 'SH',
                interactive: true,
                title: '<img src="styles/legend/SH_17.png" /> SH'
            });
var format_SR_18 = new ol.format.GeoJSON();
var features_SR_18 = format_SR_18.readFeatures(json_SR_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SR_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SR_18.addFeatures(features_SR_18);
var lyr_SR_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SR_18, 
                style: style_SR_18,
                popuplayertitle: 'SR',
                interactive: true,
                title: '<img src="styles/legend/SR_18.png" /> SR'
            });
var format_SN_19 = new ol.format.GeoJSON();
var features_SN_19 = format_SN_19.readFeatures(json_SN_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SN_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SN_19.addFeatures(features_SN_19);
var lyr_SN_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SN_19, 
                style: style_SN_19,
                popuplayertitle: 'SN',
                interactive: true,
                title: '<img src="styles/legend/SN_19.png" /> SN'
            });
var format_SP_20 = new ol.format.GeoJSON();
var features_SP_20 = format_SP_20.readFeatures(json_SP_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SP_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SP_20.addFeatures(features_SP_20);
var lyr_SP_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SP_20, 
                style: style_SP_20,
                popuplayertitle: 'SP',
                interactive: true,
                title: '<img src="styles/legend/SP_20.png" /> SP'
            });
var format_SUSN_21 = new ol.format.GeoJSON();
var features_SUSN_21 = format_SUSN_21.readFeatures(json_SUSN_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSN_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSN_21.addFeatures(features_SUSN_21);
var lyr_SUSN_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUSN_21, 
                style: style_SUSN_21,
                popuplayertitle: 'SU/SN',
                interactive: true,
                title: '<img src="styles/legend/SUSN_21.png" /> SU/SN'
            });
var format_SPSU_22 = new ol.format.GeoJSON();
var features_SPSU_22 = format_SPSU_22.readFeatures(json_SPSU_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPSU_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPSU_22.addFeatures(features_SPSU_22);
var lyr_SPSU_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPSU_22, 
                style: style_SPSU_22,
                popuplayertitle: 'SP/SU',
                interactive: true,
                title: '<img src="styles/legend/SPSU_22.png" /> SP/SU'
            });
var format_SU_23 = new ol.format.GeoJSON();
var features_SU_23 = format_SU_23.readFeatures(json_SU_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SU_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SU_23.addFeatures(features_SU_23);
var lyr_SU_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SU_23, 
                style: style_SU_23,
                popuplayertitle: 'SU',
                interactive: true,
                title: '<img src="styles/legend/SU_23.png" /> SU'
            });
var format_SJSN_24 = new ol.format.GeoJSON();
var features_SJSN_24 = format_SJSN_24.readFeatures(json_SJSN_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SJSN_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SJSN_24.addFeatures(features_SJSN_24);
var lyr_SJSN_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SJSN_24, 
                style: style_SJSN_24,
                popuplayertitle: 'SJ/SN',
                interactive: true,
                title: '<img src="styles/legend/SJSN_24.png" /> SJ/SN'
            });
var format_SJSU_25 = new ol.format.GeoJSON();
var features_SJSU_25 = format_SJSU_25.readFeatures(json_SJSU_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SJSU_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SJSU_25.addFeatures(features_SJSU_25);
var lyr_SJSU_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SJSU_25, 
                style: style_SJSU_25,
                popuplayertitle: 'SJ/SU',
                interactive: true,
                title: '<img src="styles/legend/SJSU_25.png" /> SJ/SU'
            });
var format_SJSW_26 = new ol.format.GeoJSON();
var features_SJSW_26 = format_SJSW_26.readFeatures(json_SJSW_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SJSW_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SJSW_26.addFeatures(features_SJSW_26);
var lyr_SJSW_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SJSW_26, 
                style: style_SJSW_26,
                popuplayertitle: 'SJ/SW',
                interactive: true,
                title: '<img src="styles/legend/SJSW_26.png" /> SJ/SW'
            });
var format_SJSZ_27 = new ol.format.GeoJSON();
var features_SJSZ_27 = format_SJSZ_27.readFeatures(json_SJSZ_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SJSZ_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SJSZ_27.addFeatures(features_SJSZ_27);
var lyr_SJSZ_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SJSZ_27, 
                style: style_SJSZ_27,
                popuplayertitle: 'SJ/SZ',
                interactive: true,
                title: '<img src="styles/legend/SJSZ_27.png" /> SJ/SZ'
            });
var format_SZ_28 = new ol.format.GeoJSON();
var features_SZ_28 = format_SZ_28.readFeatures(json_SZ_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SZ_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SZ_28.addFeatures(features_SZ_28);
var lyr_SZ_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SZ_28, 
                style: style_SZ_28,
                popuplayertitle: 'SZ',
                interactive: true,
                title: '<img src="styles/legend/SZ_28.png" /> SZ'
            });
var format_SW_29 = new ol.format.GeoJSON();
var features_SW_29 = format_SW_29.readFeatures(json_SW_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SW_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SW_29.addFeatures(features_SW_29);
var lyr_SW_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SW_29, 
                style: style_SW_29,
                popuplayertitle: 'SW',
                interactive: true,
                title: '<img src="styles/legend/SW_29.png" /> SW'
            });
var format_SJ_30 = new ol.format.GeoJSON();
var features_SJ_30 = format_SJ_30.readFeatures(json_SJ_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SJ_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SJ_30.addFeatures(features_SJ_30);
var lyr_SJ_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SJ_30, 
                style: style_SJ_30,
                popuplayertitle: 'SJ',
                interactive: true,
                title: '<img src="styles/legend/SJ_30.png" /> SJ'
            });
var format_Obreb_ewid_Lubien_31 = new ol.format.GeoJSON();
var features_Obreb_ewid_Lubien_31 = format_Obreb_ewid_Lubien_31.readFeatures(json_Obreb_ewid_Lubien_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obreb_ewid_Lubien_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obreb_ewid_Lubien_31.addFeatures(features_Obreb_ewid_Lubien_31);
var lyr_Obreb_ewid_Lubien_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obreb_ewid_Lubien_31, 
                style: style_Obreb_ewid_Lubien_31,
                popuplayertitle: 'Obreb_ewid_Lubien',
                interactive: true,
                title: '<img src="styles/legend/Obreb_ewid_Lubien_31.png" /> Obreb_ewid_Lubien'
            });
var format_Obreb_ewid_SkomielnaBiala_32 = new ol.format.GeoJSON();
var features_Obreb_ewid_SkomielnaBiala_32 = format_Obreb_ewid_SkomielnaBiala_32.readFeatures(json_Obreb_ewid_SkomielnaBiala_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obreb_ewid_SkomielnaBiala_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obreb_ewid_SkomielnaBiala_32.addFeatures(features_Obreb_ewid_SkomielnaBiala_32);
var lyr_Obreb_ewid_SkomielnaBiala_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obreb_ewid_SkomielnaBiala_32, 
                style: style_Obreb_ewid_SkomielnaBiala_32,
                popuplayertitle: 'Obreb_ewid_Skomielna Biala',
                interactive: true,
                title: '<img src="styles/legend/Obreb_ewid_SkomielnaBiala_32.png" /> Obreb_ewid_Skomielna Biala'
            });
var format_Obreb_ewid_Tenczyn_33 = new ol.format.GeoJSON();
var features_Obreb_ewid_Tenczyn_33 = format_Obreb_ewid_Tenczyn_33.readFeatures(json_Obreb_ewid_Tenczyn_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obreb_ewid_Tenczyn_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obreb_ewid_Tenczyn_33.addFeatures(features_Obreb_ewid_Tenczyn_33);
var lyr_Obreb_ewid_Tenczyn_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obreb_ewid_Tenczyn_33, 
                style: style_Obreb_ewid_Tenczyn_33,
                popuplayertitle: 'Obreb_ewid_Tenczyn',
                interactive: true,
                title: '<img src="styles/legend/Obreb_ewid_Tenczyn_33.png" /> Obreb_ewid_Tenczyn'
            });
var format_Obreb_ewid_Krzeczow_34 = new ol.format.GeoJSON();
var features_Obreb_ewid_Krzeczow_34 = format_Obreb_ewid_Krzeczow_34.readFeatures(json_Obreb_ewid_Krzeczow_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obreb_ewid_Krzeczow_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obreb_ewid_Krzeczow_34.addFeatures(features_Obreb_ewid_Krzeczow_34);
var lyr_Obreb_ewid_Krzeczow_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obreb_ewid_Krzeczow_34, 
                style: style_Obreb_ewid_Krzeczow_34,
                popuplayertitle: 'Obreb_ewid_Krzeczow',
                interactive: true,
                title: '<img src="styles/legend/Obreb_ewid_Krzeczow_34.png" /> Obreb_ewid_Krzeczow'
            });
var format_Wnioski_Lubienwyszukiwanie_35 = new ol.format.GeoJSON();
var features_Wnioski_Lubienwyszukiwanie_35 = format_Wnioski_Lubienwyszukiwanie_35.readFeatures(json_Wnioski_Lubienwyszukiwanie_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wnioski_Lubienwyszukiwanie_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wnioski_Lubienwyszukiwanie_35.addFeatures(features_Wnioski_Lubienwyszukiwanie_35);
var lyr_Wnioski_Lubienwyszukiwanie_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wnioski_Lubienwyszukiwanie_35, 
                style: style_Wnioski_Lubienwyszukiwanie_35,
                popuplayertitle: 'Wnioski_Lubien(wyszukiwanie)',
                interactive: false,
                title: '<img src="styles/legend/Wnioski_Lubienwyszukiwanie_35.png" /> Wnioski_Lubien(wyszukiwanie)'
            });
var format_Granicagminy_36 = new ol.format.GeoJSON();
var features_Granicagminy_36 = format_Granicagminy_36.readFeatures(json_Granicagminy_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Granicagminy_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Granicagminy_36.addFeatures(features_Granicagminy_36);
var lyr_Granicagminy_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Granicagminy_36, 
                style: style_Granicagminy_36,
                popuplayertitle: 'Granica gminy',
                interactive: false,
                title: '<img src="styles/legend/Granicagminy_36.png" /> Granica gminy'
            });
var group_Wnioskowanestefyprzeznaczenia = new ol.layer.Group({
                                layers: [lyr_inne_10,lyr_Obszarograniczonegouzytkowania_11,lyr_Las_12,lyr_SO_13,lyr_SC_14,lyr_SK_15,lyr_SI_16,lyr_SH_17,lyr_SR_18,lyr_SN_19,lyr_SP_20,lyr_SUSN_21,lyr_SPSU_22,lyr_SU_23,lyr_SJSN_24,lyr_SJSU_25,lyr_SJSW_26,lyr_SJSZ_27,lyr_SZ_28,lyr_SW_29,lyr_SJ_30,],
                                fold: 'close',
                                title: 'Wnioskowane stefy/przeznaczenia'});
var group_MPZP = new ol.layer.Group({
                                layers: [lyr_mpzp_6,lyr_dod_info_pow_7,lyr_dod_info_pkt_8,lyr_dod_info_lin_9,],
                                fold: 'close',
                                title: 'MPZP'});
var group_Studium = new ol.layer.Group({
                                layers: [lyr_studium_kierunki_2,lyr_studium_dod_info_pow_3,lyr_studium_dod_info_pkt_4,lyr_studium_dod_info_lin_5,],
                                fold: 'close',
                                title: 'Studium'});

lyr_Ortofotomapastandardowa_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_studium_kierunki_2.setVisible(true);lyr_studium_dod_info_pow_3.setVisible(true);lyr_studium_dod_info_pkt_4.setVisible(true);lyr_studium_dod_info_lin_5.setVisible(true);lyr_mpzp_6.setVisible(true);lyr_dod_info_pow_7.setVisible(true);lyr_dod_info_pkt_8.setVisible(true);lyr_dod_info_lin_9.setVisible(true);lyr_inne_10.setVisible(true);lyr_Obszarograniczonegouzytkowania_11.setVisible(true);lyr_Las_12.setVisible(true);lyr_SO_13.setVisible(true);lyr_SC_14.setVisible(true);lyr_SK_15.setVisible(true);lyr_SI_16.setVisible(true);lyr_SH_17.setVisible(true);lyr_SR_18.setVisible(true);lyr_SN_19.setVisible(true);lyr_SP_20.setVisible(true);lyr_SUSN_21.setVisible(true);lyr_SPSU_22.setVisible(true);lyr_SU_23.setVisible(true);lyr_SJSN_24.setVisible(true);lyr_SJSU_25.setVisible(true);lyr_SJSW_26.setVisible(true);lyr_SJSZ_27.setVisible(true);lyr_SZ_28.setVisible(true);lyr_SW_29.setVisible(true);lyr_SJ_30.setVisible(true);lyr_Obreb_ewid_Lubien_31.setVisible(true);lyr_Obreb_ewid_SkomielnaBiala_32.setVisible(true);lyr_Obreb_ewid_Tenczyn_33.setVisible(true);lyr_Obreb_ewid_Krzeczow_34.setVisible(true);lyr_Wnioski_Lubienwyszukiwanie_35.setVisible(true);lyr_Granicagminy_36.setVisible(true);
var layersList = [lyr_Ortofotomapastandardowa_0,lyr_OpenStreetMap_1,group_Studium,group_MPZP,group_Wnioskowanestefyprzeznaczenia,lyr_Obreb_ewid_Lubien_31,lyr_Obreb_ewid_SkomielnaBiala_32,lyr_Obreb_ewid_Tenczyn_33,lyr_Obreb_ewid_Krzeczow_34,lyr_Wnioski_Lubienwyszukiwanie_35,lyr_Granicagminy_36];
lyr_inne_10.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_Obszarograniczonegouzytkowania_11.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_Las_12.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SO_13.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SC_14.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SK_15.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SI_16.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SH_17.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SR_18.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SN_19.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SP_20.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SUSN_21.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SPSU_22.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SU_23.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SJSN_24.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SJSU_25.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SJSW_26.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SJSZ_27.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SZ_28.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SW_29.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_SJ_30.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_Obreb_ewid_Lubien_31.set('fieldAliases', {'fid': 'fid', 'idDzialki': 'idDzialki', });
lyr_Obreb_ewid_SkomielnaBiala_32.set('fieldAliases', {'fid': 'fid', 'idDzialki': 'idDzialki', 'Obreb_ewid': 'Obreb_ewid', });
lyr_Obreb_ewid_Tenczyn_33.set('fieldAliases', {'fid': 'fid', 'idDzialki': 'idDzialki', });
lyr_Obreb_ewid_Krzeczow_34.set('fieldAliases', {'fid': 'fid', 'idDzialki': 'idDzialki', 'Obreb_ewid': 'Obreb_ewid', });
lyr_Wnioski_Lubienwyszukiwanie_35.set('fieldAliases', {'Lp': 'Lp', 'Wnioskowan': 'Wnioskowan', 'kategoria': 'kategoria', });
lyr_Granicagminy_36.set('fieldAliases', {'Nazwa': 'Nazwa', 'TERYT': 'TERYT', });
lyr_inne_10.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_Obszarograniczonegouzytkowania_11.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_Las_12.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SO_13.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SC_14.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SK_15.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SI_16.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SH_17.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SR_18.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SN_19.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SP_20.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SUSN_21.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SPSU_22.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SU_23.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SJSN_24.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SJSU_25.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SJSW_26.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SJSZ_27.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SZ_28.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SW_29.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_SJ_30.set('fieldImages', {'Lp': '', 'Wnioskowan': '', 'kategoria': '', });
lyr_Obreb_ewid_Lubien_31.set('fieldImages', {'fid': 'TextEdit', 'idDzialki': 'TextEdit', });
lyr_Obreb_ewid_SkomielnaBiala_32.set('fieldImages', {'fid': 'TextEdit', 'idDzialki': 'TextEdit', 'Obreb_ewid': 'TextEdit', });
lyr_Obreb_ewid_Tenczyn_33.set('fieldImages', {'fid': 'TextEdit', 'idDzialki': 'TextEdit', });
lyr_Obreb_ewid_Krzeczow_34.set('fieldImages', {'fid': 'TextEdit', 'idDzialki': 'TextEdit', 'Obreb_ewid': 'TextEdit', });
lyr_Wnioski_Lubienwyszukiwanie_35.set('fieldImages', {'Lp': 'TextEdit', 'Wnioskowan': 'TextEdit', 'kategoria': 'TextEdit', });
lyr_Granicagminy_36.set('fieldImages', {'Nazwa': 'TextEdit', 'TERYT': 'TextEdit', });
lyr_inne_10.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_Obszarograniczonegouzytkowania_11.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_Las_12.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SO_13.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SC_14.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SK_15.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SI_16.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SH_17.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SR_18.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SN_19.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SP_20.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SUSN_21.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SPSU_22.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SU_23.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SJSN_24.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SJSU_25.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SJSW_26.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SJSZ_27.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SZ_28.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SW_29.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_SJ_30.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'hidden field', });
lyr_Obreb_ewid_Lubien_31.set('fieldLabels', {'fid': 'hidden field', 'idDzialki': 'inline label - always visible', });
lyr_Obreb_ewid_SkomielnaBiala_32.set('fieldLabels', {'fid': 'hidden field', 'idDzialki': 'inline label - always visible', 'Obreb_ewid': 'hidden field', });
lyr_Obreb_ewid_Tenczyn_33.set('fieldLabels', {'fid': 'hidden field', 'idDzialki': 'inline label - always visible', });
lyr_Obreb_ewid_Krzeczow_34.set('fieldLabels', {'fid': 'hidden field', 'idDzialki': 'inline label - always visible', 'Obreb_ewid': 'hidden field', });
lyr_Wnioski_Lubienwyszukiwanie_35.set('fieldLabels', {'Lp': 'no label', 'Wnioskowan': 'no label', 'kategoria': 'no label', });
lyr_Granicagminy_36.set('fieldLabels', {'Nazwa': 'no label', 'TERYT': 'no label', });
lyr_Granicagminy_36.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});