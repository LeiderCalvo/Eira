
/*let str = '';
for (let i = 0; i < 300; i++) {
    str += `{"properties": {"id": "a${Math.random().toString(36).substr(2, 9)}", "mag": ${Math.random() * (7 - 2) + 2}, "time": ${Math.random() * (1591476791397 - 1590267191397) + 1590267191397}}, "geometry": { "type": "Point", "coordinates": [-${Math.random() * (76.55 - 76.52) + 76.52}, ${Math.random() * (3.46 - 3.34) + 3.34}, 0] } },`;
}
eee.innerText = str;*/
const Data2 = {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },

    "features": [

        {"properties": {"contaminante": "pm25", "id":  "a8eb96j4u5", "mag": 6, "time": 1592574646003}, "geometry": { "type": "Point", "coordinates": [-76.513073, 3.230267, 0] } },

        {"properties": {"contaminante": "pm25", "id":  "a87b96j4u5", "mag": 3.9458520126780545, "time": 1590361686247.6643}, "geometry": { "type": "Point", "coordinates": [-76.51254208253087, 3.4429457340667544, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "awpkrkntu1", "mag": 2.522184137468429, "time": 1590633322335.9307}, "geometry": { "type": "Point", "coordinates": [-76.50977823386822, 3.4697170462470313, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ahafs1s33v", "mag": 3.7233315804991536, "time": 1590601007627.8745}, "geometry": { "type": "Point", "coordinates": [-76.4717944324608, 3.447656317221226, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ayup5kr3ch", "mag": 4.711154235517731, "time": 1590818739262.381}, "geometry": { "type": "Point", "coordinates": [-76.5132063087112, 3.4115379483744785, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "agq12beu3q", "mag": 5.59294937447901, "time": 1590386497480.3472}, "geometry": { "type": "Point", "coordinates": [-76.47949938053185, 3.414813797675622, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a4vvodympi", "mag": 2.262627081618192, "time": 1591310771979.7761}, "geometry": { "type": "Point", "coordinates": [-76.5128910531108, 3.4897686076985477, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "adq7kwfyog", "mag": 4.264509157215066, "time": 1591197803252.6492}, "geometry": { "type": "Point", "coordinates": [-76.50706936716523, 3.420303355933972, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "al6lqf2872", "mag": 2.015801020386119, "time": 1591401535649.5254}, "geometry": { "type": "Point", "coordinates": [-76.4802201985175, 3.4894819197059737, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a1jx3v7boh", "mag": 4.938589088525902, "time": 1590412366836.6729}, "geometry": { "type": "Point", "coordinates": [-76.51666250567125, 3.4870826349339636, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "amldth6mym", "mag": 2.5396958012787243, "time": 1590809307971.788}, "geometry": { "type": "Point", "coordinates": [-76.46199367795906, 3.4864236407989595, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aexzb3kkpe", "mag": 5.829088422411359, "time": 1591469127015.7288}, "geometry": { "type": "Point", "coordinates": [-76.4743383385778, 3.4565776952452008, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "af270oztyw", "mag": 4.400950502998043, "time": 1590886847947.897}, "geometry": { "type": "Point", "coordinates": [-76.48262280654093, 3.4692507302098314, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a89olzkdg1", "mag": 4.991292829949058, "time": 1591204343899.526}, "geometry": { "type": "Point", "coordinates": [-76.49707697454612, 3.488274027187887, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a3xw73s3l6", "mag": 2.127397661064083, "time": 1591119570478.6863}, "geometry": { "type": "Point", "coordinates": [-76.50663135980518, 3.432228242967025, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "adj9ftko2z", "mag": 5.171859098297929, "time": 1590311584420.7168}, "geometry": { "type": "Point", "coordinates": [-76.46888390225061, 3.4406640940396316, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a9woi66ezo", "mag": 3.770071682877953, "time": 1591349456767.528}, "geometry": { "type": "Point", "coordinates": [-76.47331057688416, 3.4694957770275012, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a1pu8i1uio", "mag": 2.1168680056321785, "time": 1590851641315.3982}, "geometry": { "type": "Point", "coordinates": [-76.46320563776878, 3.447335033468681, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "am71qrsuwb", "mag": 4.060845203645404, "time": 1590425712758.4502}, "geometry": { "type": "Point", "coordinates": [-76.49380917915082, 3.48126036009812, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a965l8lx9y", "mag": 2.8883142309881915, "time": 1591118531344.7478}, "geometry": { "type": "Point", "coordinates": [-76.49706864223728, 3.476682224251465, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "avpe7cb0mc", "mag": 4.221861048215176, "time": 1590383491967.32}, "geometry": { "type": "Point", "coordinates": [-76.49005377944738, 3.4119137632369663, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aac6hsed0j", "mag": 5.385342887630526, "time": 1590778876183.876}, "geometry": { "type": "Point", "coordinates": [-76.47794145025995, 3.4898347556497082, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ae9h4buzjo", "mag": 5.7226719515116455, "time": 1591287947418.8381}, "geometry": { "type": "Point", "coordinates": [-76.46128814261226, 3.464288200766023, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "anf9982em1", "mag": 3.120855925347226, "time": 1590961089550.472}, "geometry": { "type": "Point", "coordinates": [-76.50392697381302, 3.4481551010778735, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ai12at0qed", "mag": 5.526365940068158, "time": 1591253137295.7307}, "geometry": { "type": "Point", "coordinates": [-76.494870061452, 3.486338602905981, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ar3c8enid9", "mag": 3.3147857591799736, "time": 1591254759846.6042}, "geometry": { "type": "Point", "coordinates": [-76.4783857979289, 3.482511685276586, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a5qajo7qzy", "mag": 5.721298869222148, "time": 1590321463520.7998}, "geometry": { "type": "Point", "coordinates": [-76.46853791166805, 3.4829952123208763, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a5pauh2ami", "mag": 3.0938304502033414, "time": 1591090568320.2712}, "geometry": { "type": "Point", "coordinates": [-76.48441109891212, 3.43360287241202, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ayz00acmhw", "mag": 2.228074204419622, "time": 1590323757607.854}, "geometry": { "type": "Point", "coordinates": [-76.47570784257343, 3.4190020783320163, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "azajkioa2w", "mag": 5.325376092580695, "time": 1590852736700.3403}, "geometry": { "type": "Point", "coordinates": [-76.48846714014718, 3.455181670861448, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "apzxaxjknf", "mag": 5.277845717024183, "time": 1590356098203.3608}, "geometry": { "type": "Point", "coordinates": [-76.48317296154411, 3.411915993324705, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "anhmp19hzb", "mag": 3.9309584888600395, "time": 1591223475429.1377}, "geometry": { "type": "Point", "coordinates": [-76.47724653873138, 3.444975127433037, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ahqqditdp3", "mag": 2.681059714451848, "time": 1590406795990.1943}, "geometry": { "type": "Point", "coordinates": [-76.47099499604067, 3.4783210650741516, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "acshygl30s", "mag": 2.4827401621329663, "time": 1590291732367.4155}, "geometry": { "type": "Point", "coordinates": [-76.46989893353718, 3.4225631621198134, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ay831k7of5", "mag": 2.0415425591631835, "time": 1591286634682.0671}, "geometry": { "type": "Point", "coordinates": [-76.51588460611835, 3.4722099208325297, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a3nguep7rt", "mag": 4.712618308222838, "time": 1590447403212.4863}, "geometry": { "type": "Point", "coordinates": [-76.49069914946975, 3.4264522701684577, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aodg60hbyu", "mag": 4.615548437731618, "time": 1591438846462.0198}, "geometry": { "type": "Point", "coordinates": [-76.46942534936989, 3.4354297023520806, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ayxqokro6d", "mag": 4.095556711682432, "time": 1591087815699.069}, "geometry": { "type": "Point", "coordinates": [-76.51863299778105, 3.4610414500840876, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a4ijkotrx2", "mag": 3.4119689423107618, "time": 1590514505285.5051}, "geometry": { "type": "Point", "coordinates": [-76.50086413705313, 3.4773468507779834, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aj33myc6gp", "mag": 2.597633321227297, "time": 1591232297971.6926}, "geometry": { "type": "Point", "coordinates": [-76.47706343009833, 3.4352553637462533, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aip5hosna9", "mag": 4.117509674973725, "time": 1590611908701.5579}, "geometry": { "type": "Point", "coordinates": [-76.4628202187434, 3.427191490679938, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "avlsobk84j", "mag": 4.1195022650537165, "time": 1590773384981.9148}, "geometry": { "type": "Point", "coordinates": [-76.51384146130017, 3.465030834619209, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "antskgii2k", "mag": 2.3618419448242713, "time": 1590957502990.597}, "geometry": { "type": "Point", "coordinates": [-76.51878007753743, 3.410179704735276, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ae05f1ufom", "mag": 2.3745391596383243, "time": 1590296102240.3516}, "geometry": { "type": "Point", "coordinates": [-76.46975764920673, 3.4268096742950718, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aiyx55y66c", "mag": 2.205267663061835, "time": 1590749583820.3638}, "geometry": { "type": "Point", "coordinates": [-76.516577209837, 3.488806957429696, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ayfz1we4bq", "mag": 3.020592591971088, "time": 1591331401775.8713}, "geometry": { "type": "Point", "coordinates": [-76.50895649448789, 3.4185257927542345, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ay76aor23a", "mag": 2.1183819362487517, "time": 1590850377140.0073}, "geometry": { "type": "Point", "coordinates": [-76.47978342409372, 3.4176573297202064, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "axpq69lx7g", "mag": 5.759922514993508, "time": 1590999498150.6836}, "geometry": { "type": "Point", "coordinates": [-76.50015080887428, 3.4444531094860276, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aqop4knnl5", "mag": 5.934825124573736, "time": 1590541967177.5002}, "geometry": { "type": "Point", "coordinates": [-76.4818886185682, 3.4746975866069394, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aqn3ze9ae3", "mag": 2.292970694810921, "time": 1590969320217.6184}, "geometry": { "type": "Point", "coordinates": [-76.49401216889629, 3.4505945159634748, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "am55scco7w", "mag": 4.382929563902916, "time": 1590951817836.1187}, "geometry": { "type": "Point", "coordinates": [-76.46731760235129, 3.413741612588838, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "arxukuclf7", "mag": 3.9707719462324524, "time": 1590894655288.0642}, "geometry": { "type": "Point", "coordinates": [-76.46108185190504, 3.4478169343372653, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a7yjq3xgr3", "mag": 3.429383775017415, "time": 1590816151815.0454}, "geometry": { "type": "Point", "coordinates": [-76.49517975808384, 3.4619919039461133, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aiun8qkgik", "mag": 4.938760943112246, "time": 1591222755286.4275}, "geometry": { "type": "Point", "coordinates": [-76.51021773008736, 3.4366840389785467, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a3ulvixb51", "mag": 5.372968367043732, "time": 1590676195443.1582}, "geometry": { "type": "Point", "coordinates": [-76.49659179972808, 3.462593149054429, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aucype71x3", "mag": 4.703943824978588, "time": 1591274469679.1257}, "geometry": { "type": "Point", "coordinates": [-76.4717858654937, 3.454499019720042, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a4er46jmed", "mag": 4.07727431178906, "time": 1590290597139.7458}, "geometry": { "type": "Point", "coordinates": [-76.50734529955356, 3.4152882944830183, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ahlixz2qwd", "mag": 5.977702051347594, "time": 1591046491823.158}, "geometry": { "type": "Point", "coordinates": [-76.51931065491274, 3.47516318833061, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "au7bdygw4i", "mag": 5.855069137969467, "time": 1591133940310.342}, "geometry": { "type": "Point", "coordinates": [-76.48039453133238, 3.4103946865057853, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "awuy13eodu", "mag": 4.553977021410252, "time": 1591041574713.0864}, "geometry": { "type": "Point", "coordinates": [-76.50587959923516, 3.4319651713381147, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aaipaq0ard", "mag": 2.5836299056227245, "time": 1590372431184.654}, "geometry": { "type": "Point", "coordinates": [-76.47492945978468, 3.4891872485193334, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a9y27w4gw0", "mag": 2.623556936620757, "time": 1590972534668.4155}, "geometry": { "type": "Point", "coordinates": [-76.48885607727456, 3.456463455966341, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "av4zlmcvvr", "mag": 2.164643679008334, "time": 1591327116871.8289}, "geometry": { "type": "Point", "coordinates": [-76.48918107925186, 3.4129922731686615, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aigedypl47", "mag": 4.343490117517471, "time": 1590663201083.5344}, "geometry": { "type": "Point", "coordinates": [-76.50645080244212, 3.4522820193579986, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "acoqouppvv", "mag": 3.655475253892642, "time": 1590625937520.76}, "geometry": { "type": "Point", "coordinates": [-76.4668119168908, 3.4751632549790044, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aa358q7rz8", "mag": 2.9412566736799324, "time": 1590372409796.2065}, "geometry": { "type": "Point", "coordinates": [-76.4853801080464, 3.462021826373691, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "af42g7emwu", "mag": 2.9258907344299994, "time": 1590783180944.2686}, "geometry": { "type": "Point", "coordinates": [-76.46339943385188, 3.462972371958833, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a4b17d0wuy", "mag": 2.3391174372698247, "time": 1590595403885.6758}, "geometry": { "type": "Point", "coordinates": [-76.51791926124712, 3.4100019521417586, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ale6poupl5", "mag": 2.838926456610768, "time": 1590690602213.369}, "geometry": { "type": "Point", "coordinates": [-76.50959306829886, 3.461185886033309, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "awapb2msdv", "mag": 3.68257121060287, "time": 1591197566862.5144}, "geometry": { "type": "Point", "coordinates": [-76.51589737525408, 3.434234699274598, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "alnuoz7gyx", "mag": 3.721858120711355, "time": 1591117036380.7979}, "geometry": { "type": "Point", "coordinates": [-76.51837908797567, 3.477678409306541, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ae0eajjwb1", "mag": 4.63578786925771, "time": 1590707509215.5466}, "geometry": { "type": "Point", "coordinates": [-76.47551028204892, 3.4815400694288217, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "asritc3b4r", "mag": 3.6484090593414837, "time": 1590340718526.9546}, "geometry": { "type": "Point", "coordinates": [-76.47354460752028, 3.4483453588539104, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a5k5en6qw8", "mag": 5.174416422209107, "time": 1590542688218.7456}, "geometry": { "type": "Point", "coordinates": [-76.47506995090814, 3.4800839576973517, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aewwu6e68c", "mag": 2.611647118594074, "time": 1591292919520.6284}, "geometry": { "type": "Point", "coordinates": [-76.47250359976039, 3.474687424998712, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aixmyo0j7x", "mag": 5.147467322390347, "time": 1590464599159.5544}, "geometry": { "type": "Point", "coordinates": [-76.49526784505494, 3.4787847365302556, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a9vfmra9l0", "mag": 3.8149231531892807, "time": 1591015379100.573}, "geometry": { "type": "Point", "coordinates": [-76.48632434152707, 3.4386661311126523, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "abt0j6ufnc", "mag": 5.315004061552584, "time": 1590304032927.7314}, "geometry": { "type": "Point", "coordinates": [-76.50851114304415, 3.429684161834037, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "at0smnlpzl", "mag": 2.606642190483962, "time": 1590379857470.0024}, "geometry": { "type": "Point", "coordinates": [-76.46951179859879, 3.41106186137195, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aypzkprx92", "mag": 2.399893928299116, "time": 1590590570023.192}, "geometry": { "type": "Point", "coordinates": [-76.46893976339337, 3.4296713386719, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a8oqfk7ner", "mag": 5.345447574955649, "time": 1591157032439.0552}, "geometry": { "type": "Point", "coordinates": [-76.47528057577529, 3.4538339657018873, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aqimxb43ql", "mag": 4.4414898777122165, "time": 1590902221315.0034}, "geometry": { "type": "Point", "coordinates": [-76.46735059660543, 3.4200825474217385, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ai0jrr2ld9", "mag": 5.100413826520753, "time": 1590528023878.919}, "geometry": { "type": "Point", "coordinates": [-76.48793931868107, 3.4805585063178164, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "au7bb0addt", "mag": 2.44672991669456, "time": 1591207290615.6406}, "geometry": { "type": "Point", "coordinates": [-76.4759208016484, 3.466983139040449, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "as2lh99344", "mag": 2.902678455137481, "time": 1590474838923.7686}, "geometry": { "type": "Point", "coordinates": [-76.48705029706315, 3.431038523755651, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ao8nli9ne0", "mag": 2.281178879882641, "time": 1591293140977.3179}, "geometry": { "type": "Point", "coordinates": [-76.50696990815376, 3.4457038725550095, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "adn1r5fhm3", "mag": 2.95511980901543, "time": 1591078128315.5217}, "geometry": { "type": "Point", "coordinates": [-76.4851751847614, 3.428522243334365, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a1r6n13oj6", "mag": 2.361010519024937, "time": 1590633865892.4858}, "geometry": { "type": "Point", "coordinates": [-76.50974910172548, 3.420752446490951, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ambsilvnrg", "mag": 2.0097547397487094, "time": 1590598318734.6238}, "geometry": { "type": "Point", "coordinates": [-76.50716703576968, 3.4482383151896823, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "abydshe6ol", "mag": 3.8704411029049863, "time": 1590302447795.094}, "geometry": { "type": "Point", "coordinates": [-76.5061279197547, 3.466395839715383, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ajvkq0v7dv", "mag": 5.416801448611264, "time": 1590605426068.0215}, "geometry": { "type": "Point", "coordinates": [-76.4715302217847, 3.488202176563294, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a080m9zafv", "mag": 3.199886069562439, "time": 1590420403373.706}, "geometry": { "type": "Point", "coordinates": [-76.48030993911385, 3.4386038797073226, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ae8qqklj28", "mag": 2.103729505932346, "time": 1591128313394.9517}, "geometry": { "type": "Point", "coordinates": [-76.51990191197652, 3.4459848616477826, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aj2dopkaqv", "mag": 2.4383967471053225, "time": 1591297658373.7893}, "geometry": { "type": "Point", "coordinates": [-76.46829560114917, 3.432892252810232, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a65mi094et", "mag": 4.924076298223044, "time": 1590850661380.2764}, "geometry": { "type": "Point", "coordinates": [-76.50289652836874, 3.44642182085525, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ae32birtl1", "mag": 2.735270074668552, "time": 1590644875154.5767}, "geometry": { "type": "Point", "coordinates": [-76.49444401396671, 3.4497868026155483, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a5pzmgdcsh", "mag": 3.1309399782335525, "time": 1590288684478.0066}, "geometry": { "type": "Point", "coordinates": [-76.49094190400383, 3.4198062670198457, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aamfpdpz9t", "mag": 2.285560584395891, "time": 1590354047231.4636}, "geometry": { "type": "Point", "coordinates": [-76.49245877216012, 3.4481531894968334, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a4mp286qxn", "mag": 2.490737715394458, "time": 1590977263769.1313}, "geometry": { "type": "Point", "coordinates": [-76.49787967336292, 3.4564202655599283, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a060ynen91", "mag": 2.3082994242414383, "time": 1591368711045.8694}, "geometry": { "type": "Point", "coordinates": [-76.48942859368596, 3.465339185212869, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a4z96ly7jy", "mag": 3.7727254534696324, "time": 1590301485497.7214}, "geometry": { "type": "Point", "coordinates": [-76.48244539028786, 3.485037075601307, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ammpnwfhgw", "mag": 5.196453422648665, "time": 1591167691168.9888}, "geometry": { "type": "Point", "coordinates": [-76.51012180889674, 3.4592202850733784, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a6p4x5o8ha", "mag": 2.565946077692421, "time": 1590348743622.3704}, "geometry": { "type": "Point", "coordinates": [-76.4971529348478, 3.4800287628701896, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a70nbyqnds", "mag": 5.90453164954466, "time": 1590334784069.1807}, "geometry": { "type": "Point", "coordinates": [-76.48245248976401, 3.45796416077736, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aablqhv1bh", "mag": 5.072468222418082, "time": 1591351837323.403}, "geometry": { "type": "Point", "coordinates": [-76.50631686978149, 3.4369994970582343, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aoizg4qw87", "mag": 2.345503538955205, "time": 1590704181391.656}, "geometry": { "type": "Point", "coordinates": [-76.46067941072126, 3.4481578649767886, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a0atrpzry6", "mag": 2.5307265442931586, "time": 1591061527615.8174}, "geometry": { "type": "Point", "coordinates": [-76.48355053787932, 3.421767386561521, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "afupxod6cx", "mag": 2.4261572677423553, "time": 1590680094680.658}, "geometry": { "type": "Point", "coordinates": [-76.49608241932245, 3.484082051646103, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "azpu1ujefj", "mag": 3.586906467147088, "time": 1590508347019.8438}, "geometry": { "type": "Point", "coordinates": [-76.48854647953, 3.422925619020985, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "axex0hhgc2", "mag": 4.953160600624161, "time": 1590509971334.3555}, "geometry": { "type": "Point", "coordinates": [-76.49281564825169, 3.4118667481321383, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aqle9algnn", "mag": 2.013562476270197, "time": 1590520115056.973}, "geometry": { "type": "Point", "coordinates": [-76.46072978246657, 3.4278376108243473, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aru9o1lhtp", "mag": 5.71749416629886, "time": 1590834486711.6108}, "geometry": { "type": "Point", "coordinates": [-76.46441277621093, 3.489239774619183, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a8yy686742", "mag": 2.074891253785023, "time": 1590581258356.9695}, "geometry": { "type": "Point", "coordinates": [-76.4842024800256, 3.42835029719442, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "auz4v4jcii", "mag": 2.858922432688014, "time": 1590847812739.2266}, "geometry": { "type": "Point", "coordinates": [-76.46689122168152, 3.47016858723235, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a6nnlp8lki", "mag": 5.218955572410346, "time": 1591163210648.2817}, "geometry": { "type": "Point", "coordinates": [-76.48552240223245, 3.4311189133981745, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "athhllveqo", "mag": 2.0554290808129143, "time": 1591353188591.536}, "geometry": { "type": "Point", "coordinates": [-76.49212547956216, 3.4573371408780815, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "augbsw021g", "mag": 4.868370928699805, "time": 1590606000350.294}, "geometry": { "type": "Point", "coordinates": [-76.48395331168618, 3.4719546881234526, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aqb428r46t", "mag": 2.632339932970458, "time": 1590493563382.1257}, "geometry": { "type": "Point", "coordinates": [-76.49890336512924, 3.4747373892827533, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aa4boku2ms", "mag": 5.7009365615387235, "time": 1590934915954.1028}, "geometry": { "type": "Point", "coordinates": [-76.46538226474604, 3.4838048598000557, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a6gct7jawt", "mag": 2.303570458713947, "time": 1591338020055.3582}, "geometry": { "type": "Point", "coordinates": [-76.46236760525753, 3.424330804548347, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "av3022lqvl", "mag": 2.257706637239176, "time": 1590366596319.9312}, "geometry": { "type": "Point", "coordinates": [-76.51606250976334, 3.4359983793289803, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aw3e4jea3r", "mag": 3.229245387728187, "time": 1590907112152.1516}, "geometry": { "type": "Point", "coordinates": [-76.51012035434182, 3.428331379000905, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "arqlnx157u", "mag": 3.358457045624142, "time": 1590441648934.9739}, "geometry": { "type": "Point", "coordinates": [-76.51604462544879, 3.4703111271206946, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a1ctkzsa5k", "mag": 4.773992585399102, "time": 1590280806416.5183}, "geometry": { "type": "Point", "coordinates": [-76.47434545298553, 3.4796534812893656, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ayte5xpwpa", "mag": 3.3546391859816853, "time": 1591135614907.5193}, "geometry": { "type": "Point", "coordinates": [-76.47868350080647, 3.457203993180553, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a8amrhuzla", "mag": 3.84372004957254, "time": 1590837149007.9639}, "geometry": { "type": "Point", "coordinates": [-76.5195150984961, 3.4769160778610253, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a6blhov1nv", "mag": 3.2142478045974148, "time": 1591441869960.6584}, "geometry": { "type": "Point", "coordinates": [-76.51125866729818, 3.4720619382230353, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a04gnqumhv", "mag": 4.525857852688214, "time": 1590852960896.8088}, "geometry": { "type": "Point", "coordinates": [-76.51277603226335, 3.4222316240497492, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ahzvo63oi0", "mag": 5.812948319329741, "time": 1591182394869.0413}, "geometry": { "type": "Point", "coordinates": [-76.49920191989625, 3.4118484629354695, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aa1cfyvgq1", "mag": 2.960595877010303, "time": 1591253965664.5764}, "geometry": { "type": "Point", "coordinates": [-76.50835873498609, 3.4251784055706005, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a5wgabdbh3", "mag": 5.918510567799448, "time": 1590289558420.2756}, "geometry": { "type": "Point", "coordinates": [-76.50644875078113, 3.438917547394028, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "atocqatbct", "mag": 2.5107805637046936, "time": 1591277311424.4182}, "geometry": { "type": "Point", "coordinates": [-76.49776441883685, 3.4616047365140195, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ag54sjuw5j", "mag": 2.55574169443341, "time": 1590531217019.0193}, "geometry": { "type": "Point", "coordinates": [-76.4952677961675, 3.429553295338324, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ag4z06zqyj", "mag": 2.6914481129782635, "time": 1591160580047.3333}, "geometry": { "type": "Point", "coordinates": [-76.51769223743084, 3.4403369060960762, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a7slsw797o", "mag": 2.627320008778614, "time": 1590699306620.0886}, "geometry": { "type": "Point", "coordinates": [-76.4724450028643, 3.4443981170829567, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "anyq6ntij1", "mag": 4.390139545539843, "time": 1590655085159.992}, "geometry": { "type": "Point", "coordinates": [-76.46930994793084, 3.4172341001975197, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a2tqkcaw5z", "mag": 4.099462990305119, "time": 1590454649563.9265}, "geometry": { "type": "Point", "coordinates": [-76.474822555443, 3.4376337361708074, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aefl3w8qaq", "mag": 5.372949106834499, "time": 1590584804538.076}, "geometry": { "type": "Point", "coordinates": [-76.48224579591464, 3.421310646306343, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a52bcyx18s", "mag": 5.731517640983442, "time": 1590904731447.5571}, "geometry": { "type": "Point", "coordinates": [-76.4712027293678, 3.4429359793763386, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "abf4krvynd", "mag": 2.0494219242604954, "time": 1591350665809.6099}, "geometry": { "type": "Point", "coordinates": [-76.50617030242131, 3.423391886182725, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "as8s6hnzcf", "mag": 2.573347805409219, "time": 1591149353631.5671}, "geometry": { "type": "Point", "coordinates": [-76.48147072543703, 3.4876538000007327, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "af4ulm46z1", "mag": 2.3292875891520906, "time": 1590455156413.4055}, "geometry": { "type": "Point", "coordinates": [-76.50289433360449, 3.44865092200889, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "am0ljtra2s", "mag": 5.103606388551591, "time": 1590554732656.9744}, "geometry": { "type": "Point", "coordinates": [-76.47627748181968, 3.4217930732698667, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a1jqdjt4w4", "mag": 4.495272349303461, "time": 1590881396401.9268}, "geometry": { "type": "Point", "coordinates": [-76.5132350119142, 3.436130105900031, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a2vau4kd8a", "mag": 2.48221661738968, "time": 1590470969113.1506}, "geometry": { "type": "Point", "coordinates": [-76.50417383274457, 3.429072891858226, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ajp6rumtcu", "mag": 2.041465222714788, "time": 1590640054004.511}, "geometry": { "type": "Point", "coordinates": [-76.5183199820896, 3.4203956183594877, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "aqjepfd3rv", "mag": 3.071733038717837, "time": 1591342698384.9436}, "geometry": { "type": "Point", "coordinates": [-76.47694023571049, 3.448054874618431, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "a2xf8xgz5d", "mag": 2.591204240026713, "time": 1590822051362.8062}, "geometry": { "type": "Point", "coordinates": [-76.49672966964876, 3.4629137253962483, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ahmnqr8njh", "mag": 4.086813298152757, "time": 1590539298820.4148}, "geometry": { "type": "Point", "coordinates": [-76.49264367707174, 3.4194861190221904, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ao8b54h66n", "mag": 5.960901780172569, "time": 1591146204318.006}, "geometry": { "type": "Point", "coordinates": [-76.46730920865903, 3.4425489502049476, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ausi3v6kf6", "mag": 3.1377743087349232, "time": 1590331426901.997}, "geometry": { "type": "Point", "coordinates": [-76.50781171311112, 3.4528250628496333, 0] } },
        {"properties": {"contaminante": "pm25", "id":  "ajhkq2i8do", "mag": 3.3008363568694525, "time": 1590535092457.2837}, "geometry": { "type": "Point", "coordinates": [-76.50376840652677, 3.483402399157551, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aqfarxbalp", "mag": 2.768212822198481, "time": 1591375069744.2632}, "geometry": { "type": "Point", "coordinates": [-76.50257799867407, 3.4892833674848935, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aopay3o9rn", "mag": 2.139854748775896, "time": 1590620002867.77}, "geometry": { "type": "Point", "coordinates": [-76.47707587257068, 3.4298696601722436, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aejunmimwg", "mag": 3.8803991206528945, "time": 1590852464360.868}, "geometry": { "type": "Point", "coordinates": [-76.51667850195336, 3.422221504936689, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aejnysnjhv", "mag": 2.36431981418839, "time": 1590831361243.4263}, "geometry": { "type": "Point", "coordinates": [-76.49347811807245, 3.4437809523067733, 0] } },
        {"properties": {"contaminante": "co2", "id":  "ah52dwkaby", "mag": 2.038142476295664, "time": 1590915882829.2488}, "geometry": { "type": "Point", "coordinates": [-76.48487498649372, 3.4454206807237604, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a6qepkrcmi", "mag": 5.270989045878775, "time": 1590378989041.4502}, "geometry": { "type": "Point", "coordinates": [-76.49212986153854, 3.4542854506908975, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aw9kvoveuw", "mag": 2.2536609122120637, "time": 1590528199322.7324}, "geometry": { "type": "Point", "coordinates": [-76.51585928321575, 3.467444214177446, 0] } },
        {"properties": {"contaminante": "co2", "id":  "avxf4aa2u2", "mag": 4.0113946174606525, "time": 1591292995899.5603}, "geometry": { "type": "Point", "coordinates": [-76.50077004244743, 3.4491254619453087, 0] } },
        {"properties": {"contaminante": "co2", "id":  "acqie4jwbc", "mag": 3.8864353169150503, "time": 1591211676329.275}, "geometry": { "type": "Point", "coordinates": [-76.50049202236467, 3.4181168598998015, 0] } },
        {"properties": {"contaminante": "co2", "id":  "anlzagdqpm", "mag": 3.3502305635216083, "time": 1590673297232.9248}, "geometry": { "type": "Point", "coordinates": [-76.475393156898, 3.4621183748020843, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a8vs9t3ij6", "mag": 3.753291935105624, "time": 1590441074981.4624}, "geometry": { "type": "Point", "coordinates": [-76.47831888818546, 3.4189774843444396, 0] } },
        {"properties": {"contaminante": "co2", "id":  "atmwzubohj", "mag": 4.967614740960883, "time": 1590577572047.0918}, "geometry": { "type": "Point", "coordinates": [-76.4987700828304, 3.469498780769966, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a90529ym2c", "mag": 3.256707157498779, "time": 1591049546544.8418}, "geometry": { "type": "Point", "coordinates": [-76.50752273690973, 3.4707072513205994, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aiud7p5t4w", "mag": 2.8815785744797253, "time": 1591245633288.968}, "geometry": { "type": "Point", "coordinates": [-76.47975714239719, 3.4226142377782036, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aq42jhd0r7", "mag": 2.0631663641919666, "time": 1591013152524.549}, "geometry": { "type": "Point", "coordinates": [-76.50332716975672, 3.456340091199777, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aoz9gef57k", "mag": 4.236536944789698, "time": 1590699717302.3855}, "geometry": { "type": "Point", "coordinates": [-76.50988967412606, 3.4419254866801174, 0] } },
        {"properties": {"contaminante": "co2", "id":  "attb7rqgc4", "mag": 2.040399246459918, "time": 1590506043678.787}, "geometry": { "type": "Point", "coordinates": [-76.51524504320236, 3.4634253068193734, 0] } },
        {"properties": {"contaminante": "co2", "id":  "acrugsic73", "mag": 2.39522270384362, "time": 1591101189663.9004}, "geometry": { "type": "Point", "coordinates": [-76.47403900682271, 3.4383534414269894, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a8djau1zvu", "mag": 2.4466786793424893, "time": 1590276399462.054}, "geometry": { "type": "Point", "coordinates": [-76.47386010531496, 3.4464934378151497, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a5p03c7dqz", "mag": 2.6455460137341253, "time": 1591130784894.115}, "geometry": { "type": "Point", "coordinates": [-76.51726691762788, 3.482362219285693, 0] } },
        {"properties": {"contaminante": "co2", "id":  "anr6tlmy4k", "mag": 2.331021769824286, "time": 1590704415957.3677}, "geometry": { "type": "Point", "coordinates": [-76.49396649261713, 3.42808036766011, 0] } },
        {"properties": {"contaminante": "co2", "id":  "afs109sr1l", "mag": 2.733709533949115, "time": 1590515202810.1335}, "geometry": { "type": "Point", "coordinates": [-76.49106488175703, 3.4699096017801936, 0] } },
        {"properties": {"contaminante": "co2", "id":  "ay7z2yvexr", "mag": 3.7181444798880086, "time": 1591100109644.5488}, "geometry": { "type": "Point", "coordinates": [-76.47528056371638, 3.4356321204990232, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a0mnu56rr4", "mag": 5.172114463719059, "time": 1590902813503.977}, "geometry": { "type": "Point", "coordinates": [-76.49026158081213, 3.479024389813496, 0] } },
        {"properties": {"contaminante": "co2", "id":  "adcrxkdqry", "mag": 5.661959901013207, "time": 1591034262772.32}, "geometry": { "type": "Point", "coordinates": [-76.5172770852581, 3.436018057073209, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a20rchjgvc", "mag": 3.340001880937005, "time": 1591053442316.1147}, "geometry": { "type": "Point", "coordinates": [-76.51230920010683, 3.475142399416945, 0] } },
        {"properties": {"contaminante": "co2", "id":  "ahbdv3zho6", "mag": 2.8697411599898075, "time": 1591255188424.9504}, "geometry": { "type": "Point", "coordinates": [-76.49575610920041, 3.437209206764716, 0] } },
        {"properties": {"contaminante": "co2", "id":  "azi6b6omgo", "mag": 2.6845227079527927, "time": 1590488994751.6025}, "geometry": { "type": "Point", "coordinates": [-76.46227036051683, 3.4628770404463753, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a30kt94zqm", "mag": 2.245895382826909, "time": 1590311265745.1704}, "geometry": { "type": "Point", "coordinates": [-76.4873485587339, 3.4732493850440016, 0] } },
        {"properties": {"contaminante": "co2", "id":  "asbgggnwd8", "mag": 4.377760099552008, "time": 1591377991393.1023}, "geometry": { "type": "Point", "coordinates": [-76.50864388726141, 3.4313581311987362, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aib8on0n4w", "mag": 5.8440775933997084, "time": 1590419394479.2356}, "geometry": { "type": "Point", "coordinates": [-76.48720246720033, 3.4478563039385755, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aaxdh21k2q", "mag": 5.371844050021043, "time": 1591194795666.0427}, "geometry": { "type": "Point", "coordinates": [-76.50944001955949, 3.41208396971387, 0] } },
        {"properties": {"contaminante": "co2", "id":  "af95mglkzg", "mag": 2.196556052335771, "time": 1591178779048.2769}, "geometry": { "type": "Point", "coordinates": [-76.47311156844043, 3.4111152644660665, 0] } },
        {"properties": {"contaminante": "co2", "id":  "acepquzqm2", "mag": 2.854085825315682, "time": 1590327251827.1604}, "geometry": { "type": "Point", "coordinates": [-76.51041432240493, 3.4483665812543007, 0] } },
        {"properties": {"contaminante": "co2", "id":  "adc7b46o1i", "mag": 4.758840120800624, "time": 1590759751267.555}, "geometry": { "type": "Point", "coordinates": [-76.47038024749286, 3.4894525120512787, 0] } },
        {"properties": {"contaminante": "co2", "id":  "asvqgu1v84", "mag": 2.555431952656865, "time": 1590810656610.5193}, "geometry": { "type": "Point", "coordinates": [-76.46327015913634, 3.4898562384206198, 0] } },
        {"properties": {"contaminante": "co2", "id":  "ah3gxrcyw2", "mag": 3.2238494881629136, "time": 1590542015220.8088}, "geometry": { "type": "Point", "coordinates": [-76.46779128180107, 3.4176751901058453, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a8eqqq9rmi", "mag": 4.731867229137172, "time": 1591398991891.8296}, "geometry": { "type": "Point", "coordinates": [-76.49361082495716, 3.417433075575129, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aathswfqcq", "mag": 2.26285893049509, "time": 1591342194427.786}, "geometry": { "type": "Point", "coordinates": [-76.46206090348889, 3.440957560850161, 0] } },
        {"properties": {"contaminante": "co2", "id":  "al5nmj6h3q", "mag": 2.9270041298181217, "time": 1590988639420.8762}, "geometry": { "type": "Point", "coordinates": [-76.4666197753298, 3.433128526753838, 0] } },
        {"properties": {"contaminante": "co2", "id":  "akrnv18itd", "mag": 4.590748904027763, "time": 1591476414205.6755}, "geometry": { "type": "Point", "coordinates": [-76.46570049801223, 3.4416477919737067, 0] } },
        {"properties": {"contaminante": "co2", "id":  "as5644cfma", "mag": 2.392363013537393, "time": 1591004504619.8643}, "geometry": { "type": "Point", "coordinates": [-76.464155059531, 3.488703808427607, 0] } },
        {"properties": {"contaminante": "co2", "id":  "al9wln69za", "mag": 2.185312229325114, "time": 1590689738032.4648}, "geometry": { "type": "Point", "coordinates": [-76.4786399132192, 3.463671672244905, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a0tcvotrp7", "mag": 2.802323196946048, "time": 1590877775721.2532}, "geometry": { "type": "Point", "coordinates": [-76.48205680012975, 3.415377462435256, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a7xajii3dn", "mag": 2.859386933585844, "time": 1590273144666.6328}, "geometry": { "type": "Point", "coordinates": [-76.46164350866124, 3.422072488102186, 0] } },
        {"properties": {"contaminante": "co2", "id":  "akvcn7onks", "mag": 4.996929985770728, "time": 1590459147282.9683}, "geometry": { "type": "Point", "coordinates": [-76.49321089913275, 3.484107249089277, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aw9iz53t8t", "mag": 3.164643289324938, "time": 1590494119000.3696}, "geometry": { "type": "Point", "coordinates": [-76.46326129454107, 3.4667879441503353, 0] } },
        {"properties": {"contaminante": "co2", "id":  "ax8gn62hli", "mag": 2.308693123648001, "time": 1590422155054.2527}, "geometry": { "type": "Point", "coordinates": [-76.4750015931292, 3.4308527673200215, 0] } },
        {"properties": {"contaminante": "co2", "id":  "azkfmg19js", "mag": 5.32966868806297, "time": 1590278522475.8867}, "geometry": { "type": "Point", "coordinates": [-76.51172527400821, 3.446587368687624, 0] } },
        {"properties": {"contaminante": "co2", "id":  "av5hl02v3s", "mag": 4.77734765462908, "time": 1590726657012.3198}, "geometry": { "type": "Point", "coordinates": [-76.47597229482122, 3.4898425088224965, 0] } },
        {"properties": {"contaminante": "co2", "id":  "awiuzr3eg5", "mag": 2.887352515966544, "time": 1591461650558.105}, "geometry": { "type": "Point", "coordinates": [-76.48867992034221, 3.4371039182015295, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a8wwk391rj", "mag": 3.543100566718719, "time": 1591363637624.677}, "geometry": { "type": "Point", "coordinates": [-76.50369076810951, 3.470831418663383, 0] } },
        {"properties": {"contaminante": "co2", "id":  "auxfegfou3", "mag": 2.464501733489109, "time": 1591244898401.822}, "geometry": { "type": "Point", "coordinates": [-76.47510553894676, 3.434779689380164, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aopw8hdba2", "mag": 2.646872560975028, "time": 1591074762780.5615}, "geometry": { "type": "Point", "coordinates": [-76.47666122436785, 3.4540041292151695, 0] } },
        {"properties": {"contaminante": "co2", "id":  "ac4h1bu1bl", "mag": 2.5869029576881624, "time": 1591425316717.9133}, "geometry": { "type": "Point", "coordinates": [-76.47371233810448, 3.486542751619878, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aqwpja0rn9", "mag": 2.097959758716183, "time": 1591127900131.8416}, "geometry": { "type": "Point", "coordinates": [-76.47719269644384, 3.418210495904268, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aelabo1m0l", "mag": 3.70148382568304, "time": 1590733444603.535}, "geometry": { "type": "Point", "coordinates": [-76.47056584427067, 3.4351709377470407, 0] } },
        {"properties": {"contaminante": "co2", "id":  "arfz1p4l9v", "mag": 4.9719192057605675, "time": 1590861916042.7327}, "geometry": { "type": "Point", "coordinates": [-76.49041676801231, 3.4499542857618994, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aga5ybpouf", "mag": 4.139316428473378, "time": 1591090727936.434}, "geometry": { "type": "Point", "coordinates": [-76.49072984161417, 3.453148190053885, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aea1shhqmv", "mag": 2.8972201839590355, "time": 1590915941494.3506}, "geometry": { "type": "Point", "coordinates": [-76.51778370514921, 3.4657831459224258, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a5vw7tgxio", "mag": 2.450927061788123, "time": 1591143735198.4546}, "geometry": { "type": "Point", "coordinates": [-76.51311327259032, 3.4194379355452047, 0] } },
        {"properties": {"contaminante": "co2", "id":  "at846jqle2", "mag": 4.254951974798139, "time": 1590853793161.0093}, "geometry": { "type": "Point", "coordinates": [-76.48444569875825, 3.4570436431049987, 0] } },
        {"properties": {"contaminante": "co2", "id":  "alis1zxfyn", "mag": 2.54744512059349, "time": 1591019010004.541}, "geometry": { "type": "Point", "coordinates": [-76.48115690835438, 3.470228519658973, 0] } },
        {"properties": {"contaminante": "co2", "id":  "axfkddny92", "mag": 2.1008463841503024, "time": 1591313909856.4612}, "geometry": { "type": "Point", "coordinates": [-76.4869578147215, 3.4655961620589646, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a4h34u6jig", "mag": 5.221589351996049, "time": 1590961524460.4106}, "geometry": { "type": "Point", "coordinates": [-76.5189516697132, 3.4111618749337413, 0] } },
        {"properties": {"contaminante": "co2", "id":  "au7z1razfz", "mag": 4.264584690978614, "time": 1591106378690.3496}, "geometry": { "type": "Point", "coordinates": [-76.47880924871644, 3.410542412203563, 0] } },
        {"properties": {"contaminante": "co2", "id":  "ata0gbkexz", "mag": 3.7214450465357203, "time": 1591183337475.186}, "geometry": { "type": "Point", "coordinates": [-76.47855971936974, 3.4324296453994623, 0] } },
        {"properties": {"contaminante": "co2", "id":  "at1xyu961t", "mag": 2.2804127499109486, "time": 1590725363495.7588}, "geometry": { "type": "Point", "coordinates": [-76.49230743578046, 3.4477459485047333, 0] } },
        {"properties": {"contaminante": "co2", "id":  "avtqu6m6w4", "mag": 2.4213282816151107, "time": 1590801551510.9392}, "geometry": { "type": "Point", "coordinates": [-76.49333750426922, 3.4658165102345087, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aygy4335hz", "mag": 2.7831033683449884, "time": 1591010294582.739}, "geometry": { "type": "Point", "coordinates": [-76.49949070773471, 3.4439681849456276, 0] } },
        {"properties": {"contaminante": "co2", "id":  "audohvwly9", "mag": 2.091683267081555, "time": 1591292589188.9753}, "geometry": { "type": "Point", "coordinates": [-76.47015961506801, 3.483927270129163, 0] } },
        {"properties": {"contaminante": "co2", "id":  "avio90kixw", "mag": 2.726320498884814, "time": 1590674763927.2664}, "geometry": { "type": "Point", "coordinates": [-76.51202037437702, 3.450634861355422, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aaj36xvsiz", "mag": 2.01079357997838, "time": 1590692193794.2393}, "geometry": { "type": "Point", "coordinates": [-76.49720342664271, 3.4173444348874056, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a39mqgvk1t", "mag": 4.367306038578867, "time": 1591150068466.1858}, "geometry": { "type": "Point", "coordinates": [-76.50231383180443, 3.4192333228828127, 0] } },
        {"properties": {"contaminante": "co2", "id":  "afhkoz86b2", "mag": 4.16926581395151, "time": 1591400293914.274}, "geometry": { "type": "Point", "coordinates": [-76.51629239636301, 3.4320746168963665, 0] } },
        {"properties": {"contaminante": "co2", "id":  "ac8ezce14n", "mag": 3.99730244958515, "time": 1591390377143.1506}, "geometry": { "type": "Point", "coordinates": [-76.51171012407158, 3.4482360391059443, 0] } },
        {"properties": {"contaminante": "co2", "id":  "ajsozljc15", "mag": 2.863612092100656, "time": 1590954364102.7112}, "geometry": { "type": "Point", "coordinates": [-76.46350851107127, 3.4845623344578702, 0] } },
        {"properties": {"contaminante": "co2", "id":  "ak1eg6fuvr", "mag": 2.664338562205808, "time": 1590603080260.624}, "geometry": { "type": "Point", "coordinates": [-76.50766892231944, 3.4145932532392624, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aw5drek9ws", "mag": 2.494180707760991, "time": 1590522001270.8943}, "geometry": { "type": "Point", "coordinates": [-76.48296625561801, 3.4320354739373204, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a15sxcblks", "mag": 2.7796701257206786, "time": 1590825492562.071}, "geometry": { "type": "Point", "coordinates": [-76.48949493769857, 3.4892555805456933, 0] } },
        {"properties": {"contaminante": "co2", "id":  "awy76l1ccu", "mag": 2.345296278795817, "time": 1591416903959.117}, "geometry": { "type": "Point", "coordinates": [-76.49152302545976, 3.4237109982520573, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aocda0hnbr", "mag": 3.8492566615440733, "time": 1590788663613.4924}, "geometry": { "type": "Point", "coordinates": [-76.46581467979321, 3.4825535356523334, 0] } },
        {"properties": {"contaminante": "co2", "id":  "ans1e5zn2z", "mag": 4.272852187573637, "time": 1591185881060.6985}, "geometry": { "type": "Point", "coordinates": [-76.46953771795631, 3.469176600855165, 0] } },
        {"properties": {"contaminante": "co2", "id":  "alzx76knmk", "mag": 2.0378555822009563, "time": 1590562616173.0159}, "geometry": { "type": "Point", "coordinates": [-76.497098059391, 3.4561764640753236, 0] } },
        {"properties": {"contaminante": "co2", "id":  "ai8o8l5h9y", "mag": 5.634263073093933, "time": 1591167948814.4597}, "geometry": { "type": "Point", "coordinates": [-76.48761139948375, 3.4566628109756468, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aiz1f3j8h0", "mag": 4.507732258787977, "time": 1590847852986.7021}, "geometry": { "type": "Point", "coordinates": [-76.46397353112113, 3.4563702010529664, 0] } },
        {"properties": {"contaminante": "co2", "id":  "addfhowp3e", "mag": 5.713545476428771, "time": 1590770752640.52}, "geometry": { "type": "Point", "coordinates": [-76.47524566591916, 3.4779711336688104, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aaj0yzyihy", "mag": 2.027207711317589, "time": 1591370745431.9995}, "geometry": { "type": "Point", "coordinates": [-76.47221787745927, 3.475172396195418, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aa60mjwt0d", "mag": 2.120220554290854, "time": 1590824582238.682}, "geometry": { "type": "Point", "coordinates": [-76.4764448538603, 3.4802449114280094, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a5d5x963m6", "mag": 2.893317412881488, "time": 1590588268367.2595}, "geometry": { "type": "Point", "coordinates": [-76.46620791521485, 3.456728065462206, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a1eklfdv43", "mag": 2.300016910597796, "time": 1590757547665.6692}, "geometry": { "type": "Point", "coordinates": [-76.50724954686495, 3.4567181609247535, 0] } },
        {"properties": {"contaminante": "co2", "id":  "axi0nt743g", "mag": 2.477380287094224, "time": 1590649391091.325}, "geometry": { "type": "Point", "coordinates": [-76.51842571397522, 3.4728054082884916, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aazfzj4y5u", "mag": 3.910894455366352, "time": 1591061992911.738}, "geometry": { "type": "Point", "coordinates": [-76.47026463425266, 3.4595920478291347, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a13jiqmk3a", "mag": 2.3090106683758975, "time": 1590729842513.0723}, "geometry": { "type": "Point", "coordinates": [-76.49569204196058, 3.460515635908422, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a4mijf3cbe", "mag": 3.314519499572514, "time": 1590840557790.1968}, "geometry": { "type": "Point", "coordinates": [-76.51234400197639, 3.424106145321698, 0] } },
        {"properties": {"contaminante": "co2", "id":  "av80unh05q", "mag": 4.8338023326345105, "time": 1590757457610.3308}, "geometry": { "type": "Point", "coordinates": [-76.4816176366875, 3.4668230205093087, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aqphoaydk2", "mag": 5.088218919329956, "time": 1590701077480.7505}, "geometry": { "type": "Point", "coordinates": [-76.49127880754124, 3.4441967363578003, 0] } },
        {"properties": {"contaminante": "co2", "id":  "amn9lcsej7", "mag": 4.262734621161703, "time": 1590909690075.4949}, "geometry": { "type": "Point", "coordinates": [-76.51478832566801, 3.470055491256748, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a64y6kiohm", "mag": 4.866543217802984, "time": 1591022497838.1873}, "geometry": { "type": "Point", "coordinates": [-76.4617766097153, 3.4832986492944342, 0] } },
        {"properties": {"contaminante": "co2", "id":  "adort0bnnf", "mag": 2.9790323534268977, "time": 1591196338623.0203}, "geometry": { "type": "Point", "coordinates": [-76.50765972310285, 3.4541439486572245, 0] } },
        {"properties": {"contaminante": "co2", "id":  "akqvbacv9d", "mag": 2.507505279160004, "time": 1590411520539.4285}, "geometry": { "type": "Point", "coordinates": [-76.49161362763394, 3.4619009899528788, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aam2vkx3zw", "mag": 5.113975790349986, "time": 1590623315434.628}, "geometry": { "type": "Point", "coordinates": [-76.51630750756885, 3.4733309978911064, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aciptwk2ya", "mag": 2.6442670229065506, "time": 1590341525570.8142}, "geometry": { "type": "Point", "coordinates": [-76.47857472211203, 3.4360186298089235, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a3nt4h1wl3", "mag": 5.383282954912419, "time": 1590855006716.9185}, "geometry": { "type": "Point", "coordinates": [-76.48501952934672, 3.484180192787949, 0] } },
        {"properties": {"contaminante": "co2", "id":  "asz2vcumxi", "mag": 4.8654157174748445, "time": 1590948464987.0862}, "geometry": { "type": "Point", "coordinates": [-76.4789296459324, 3.463755115752463, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a49nxe5cui", "mag": 4.262583229514508, "time": 1590744484750.4856}, "geometry": { "type": "Point", "coordinates": [-76.48490575900098, 3.4174448499297227, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aam0w9ccew", "mag": 4.420363517676318, "time": 1590286790054.1836}, "geometry": { "type": "Point", "coordinates": [-76.48166401009037, 3.412517665038676, 0] } },
        {"properties": {"contaminante": "co2", "id":  "alx0w3oge1", "mag": 3.8707452996509275, "time": 1590602503962.3342}, "geometry": { "type": "Point", "coordinates": [-76.48311205494139, 3.462394080302127, 0] } },
        {"properties": {"contaminante": "co2", "id":  "ap21ku3oc1", "mag": 4.844294617316124, "time": 1590945655668.59}, "geometry": { "type": "Point", "coordinates": [-76.51994087610954, 3.445649786078722, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a6jjwubful", "mag": 4.3112619919004835, "time": 1590863014236.0764}, "geometry": { "type": "Point", "coordinates": [-76.50760135481151, 3.4504879208117467, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aii8474abq", "mag": 4.777124373592193, "time": 1591225567521.7864}, "geometry": { "type": "Point", "coordinates": [-76.49153614587367, 3.480407215844157, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aa37vjw6ij", "mag": 5.717125711590876, "time": 1591231188470.9797}, "geometry": { "type": "Point", "coordinates": [-76.505398388167, 3.426138813423829, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a4d67xg74t", "mag": 4.159671937664365, "time": 1591260310988.4224}, "geometry": { "type": "Point", "coordinates": [-76.47916663594955, 3.4823787059060023, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aqc8zw6oun", "mag": 3.7488139992338105, "time": 1590839817130.2932}, "geometry": { "type": "Point", "coordinates": [-76.51370313719653, 3.4329999144950314, 0] } },
        {"properties": {"contaminante": "co2", "id":  "azzhc3v32y", "mag": 3.3765680418046564, "time": 1591225785353.9634}, "geometry": { "type": "Point", "coordinates": [-76.46681699921083, 3.4844168684572425, 0] } },
        {"properties": {"contaminante": "co2", "id":  "adeslukq9w", "mag": 4.479715234457064, "time": 1591125261314.6096}, "geometry": { "type": "Point", "coordinates": [-76.48728312072389, 3.4480779907170382, 0] } },
        {"properties": {"contaminante": "co2", "id":  "adyyyhrvq9", "mag": 2.4739612405597504, "time": 1590781799541.1445}, "geometry": { "type": "Point", "coordinates": [-76.51083264355488, 3.4468009162613744, 0] } },
        {"properties": {"contaminante": "co2", "id":  "ar0jre3apr", "mag": 2.7554455756106906, "time": 1591113893190.011}, "geometry": { "type": "Point", "coordinates": [-76.49314399312138, 3.4254110246536653, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aqneidyxr2", "mag": 2.104003272724685, "time": 1590937055345.9673}, "geometry": { "type": "Point", "coordinates": [-76.49139843978116, 3.4669928430886454, 0] } },
        {"properties": {"contaminante": "co2", "id":  "azalzufsv8", "mag": 2.235418188099789, "time": 1591195116321.471}, "geometry": { "type": "Point", "coordinates": [-76.48981088916412, 3.435873707890323, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a4r7xvy77w", "mag": 5.405574479295835, "time": 1591223260896.6375}, "geometry": { "type": "Point", "coordinates": [-76.47548985110912, 3.419519458644592, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a51duu2grp", "mag": 2.071776824672455, "time": 1590962855848.8352}, "geometry": { "type": "Point", "coordinates": [-76.51495178695411, 3.4819938718964627, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a1wswde9eu", "mag": 4.397804002269974, "time": 1591320346523.403}, "geometry": { "type": "Point", "coordinates": [-76.4831359966444, 3.4561449927087033, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aes2yh7yp4", "mag": 4.034928543762043, "time": 1591293518822.0413}, "geometry": { "type": "Point", "coordinates": [-76.47684516642751, 3.4870449677252817, 0] } },
        {"properties": {"contaminante": "co2", "id":  "avq57kgsnt", "mag": 3.973773506745684, "time": 1590386635298.4563}, "geometry": { "type": "Point", "coordinates": [-76.48695151608581, 3.432097312698516, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a4cmy70j1f", "mag": 2.965955502343795, "time": 1590586673872.8977}, "geometry": { "type": "Point", "coordinates": [-76.51209035640572, 3.41909967902163, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aa2bdwtncg", "mag": 3.687570840373356, "time": 1591053152741.5825}, "geometry": { "type": "Point", "coordinates": [-76.49203225949614, 3.475358819955936, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a9qpb96qzq", "mag": 2.543876342418937, "time": 1590698020894.6875}, "geometry": { "type": "Point", "coordinates": [-76.51982142424352, 3.4679108153752725, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aujeejr8pg", "mag": 3.498682603136434, "time": 1591147022962.99}, "geometry": { "type": "Point", "coordinates": [-76.46642768093992, 3.4571780797701717, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a6sm7wu74c", "mag": 5.788054230054332, "time": 1590387556317.7385}, "geometry": { "type": "Point", "coordinates": [-76.48164075984253, 3.459331718157705, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aughf84roj", "mag": 4.059517605746893, "time": 1590445457851.7253}, "geometry": { "type": "Point", "coordinates": [-76.46418886921624, 3.484969137739902, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a1c1yfoj0p", "mag": 4.167401631307513, "time": 1591250816875.8179}, "geometry": { "type": "Point", "coordinates": [-76.50012907327776, 3.465130489298867, 0] } },
        {"properties": {"contaminante": "co2", "id":  "akg57juvos", "mag": 3.5127840183403043, "time": 1590569275448.7368}, "geometry": { "type": "Point", "coordinates": [-76.49061542705341, 3.4428772624016752, 0] } },
        {"properties": {"contaminante": "co2", "id":  "ao0762pkz7", "mag": 4.435932604653947, "time": 1590624543114.6907}, "geometry": { "type": "Point", "coordinates": [-76.5163765843839, 3.447016418477361, 0] } },
        {"properties": {"contaminante": "co2", "id":  "abagybfwki", "mag": 4.151551414440137, "time": 1590819470947.1743}, "geometry": { "type": "Point", "coordinates": [-76.50181062215985, 3.424069232177542, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a6keaabsom", "mag": 2.032137277004714, "time": 1591383391472.215}, "geometry": { "type": "Point", "coordinates": [-76.48182497380321, 3.466182527651222, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a0t9253jb5", "mag": 4.094404616401256, "time": 1590340315902.613}, "geometry": { "type": "Point", "coordinates": [-76.5127469958359, 3.4629677226783624, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aytlsdort7", "mag": 2.215228876700568, "time": 1590541243574.8289}, "geometry": { "type": "Point", "coordinates": [-76.46207027836756, 3.4215857037817927, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a69xn20gf0", "mag": 5.786852826169969, "time": 1591029467263.069}, "geometry": { "type": "Point", "coordinates": [-76.49901963074133, 3.4814576519847886, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aucc0t8ect", "mag": 3.6092195386167294, "time": 1590967555281.7283}, "geometry": { "type": "Point", "coordinates": [-76.48923136279633, 3.4561767051838013, 0] } },
        {"properties": {"contaminante": "co2", "id":  "ac1xbml2dw", "mag": 2.374168654356559, "time": 1591411926425.475}, "geometry": { "type": "Point", "coordinates": [-76.51423483865459, 3.457456498257689, 0] } },
        {"properties": {"contaminante": "co2", "id":  "agkkmfjj49", "mag": 2.048588977338677, "time": 1590927822934.9348}, "geometry": { "type": "Point", "coordinates": [-76.46048243481457, 3.4430803287036746, 0] } },
        {"properties": {"contaminante": "co2", "id":  "agfmj7y094", "mag": 4.669876566403469, "time": 1591149209990.0212}, "geometry": { "type": "Point", "coordinates": [-76.49608197100045, 3.4573941385629072, 0] } },
        {"properties": {"contaminante": "co2", "id":  "aym9khv4rd", "mag": 4.404640974949643, "time": 1590822938083.2434}, "geometry": { "type": "Point", "coordinates": [-76.49054155266317, 3.469447033774736, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a73667a944", "mag": 5.393187005777595, "time": 1590650270369.3843}, "geometry": { "type": "Point", "coordinates": [-76.48155778398707, 3.413429651262761, 0] } },
        {"properties": {"contaminante": "co2", "id":  "al4w2dd6hn", "mag": 2.834267150643439, "time": 1590342126717.4888}, "geometry": { "type": "Point", "coordinates": [-76.50101202968436, 3.4213729335837777, 0] } },
        {"properties": {"contaminante": "co2", "id":  "acnyinfk0m", "mag": 2.0600525676369115, "time": 1590392435081.2659}, "geometry": { "type": "Point", "coordinates": [-76.46740060107801, 3.462269436207391, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a3us1l2b8h", "mag": 2.2833233463303997, "time": 1590730003972.3174}, "geometry": { "type": "Point", "coordinates": [-76.48824058597116, 3.4785145546010527, 0] } },
        {"properties": {"contaminante": "co2", "id":  "a6qk1gmlj8", "mag": 2.354163588389411, "time": 1591395205525.9526}, "geometry": { "type": "Point", "coordinates": [-76.50909824499573, 3.4571789709197516, 0] } },

        {"properties": {"contaminante": "ICA", "id":  "aup5nmpt2x", "mag": 4.4925250899549836, "time": 1591257312648.6777}, "geometry": { "type": "Point", "coordinates": [-76.53642603135525, 3.4300897877061067, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "atszl54zon", "mag": 3.861118852482707, "time": 1591200362932.8508}, "geometry": { "type": "Point", "coordinates": [-76.52267444330596, 3.445554554901026, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a71gzv16dd", "mag": 4.222982075843695, "time": 1590534363702.6272}, "geometry": { "type": "Point", "coordinates": [-76.54668207817205, 3.3922015767810443, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aktrn6cp3y", "mag": 5.018645275830782, "time": 1591093599726.355}, "geometry": { "type": "Point", "coordinates": [-76.52796275782772, 3.404021888682692, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a7ob1hexp6", "mag": 4.9085700300495283, "time": 1590312435214.0857}, "geometry": { "type": "Point", "coordinates": [-76.52089594409844, 3.3664707595654644, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ala3t64r1l", "mag": 4.1717394479150167, "time": 1591289400973.6985}, "geometry": { "type": "Point", "coordinates": [-76.52988172907358, 3.4350069228562568, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a0kvatr50q", "mag": 6.539411754483234, "time": 1590871109724.336}, "geometry": { "type": "Point", "coordinates": [-76.52022865147732, 3.422149379033065, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ahspv4aa5f", "mag": 4.415267805927806, "time": 1591134793114.1196}, "geometry": { "type": "Point", "coordinates": [-76.54345489293767, 3.388743792936977, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "afc2mxlmpc", "mag": 5.8335487485549065, "time": 1591097450900.6687}, "geometry": { "type": "Point", "coordinates": [-76.53052342773796, 3.4279966159402115, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "apnb4oy1aa", "mag": 5.290542848452977, "time": 1590770221608.4514}, "geometry": { "type": "Point", "coordinates": [-76.54909877996215, 3.373650562797116, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "agf8lsfh8h", "mag": 6.760055394643818, "time": 1590711175983.5918}, "geometry": { "type": "Point", "coordinates": [-76.54422594563546, 3.3425293100341062, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "au1i9akglz", "mag": 5.638227829963283, "time": 1590377251174.9011}, "geometry": { "type": "Point", "coordinates": [-76.5295216810187, 3.444215873648182, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "af5c40nu71", "mag": 5.06969827169914, "time": 1591047082289.352}, "geometry": { "type": "Point", "coordinates": [-76.54397849216136, 3.415646645330702, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "afvmre6duj", "mag": 5.9637027253848163, "time": 1590719572384.6633}, "geometry": { "type": "Point", "coordinates": [-76.52938218204622, 3.4191611812630724, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aglahsdgto", "mag": 5.5054210242406496, "time": 1591200598169.756}, "geometry": { "type": "Point", "coordinates": [-76.5238722622028, 3.4000853070251607, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "an6tb2qgvh", "mag": 4.701186348028479, "time": 1591354109497.8354}, "geometry": { "type": "Point", "coordinates": [-76.53255705486124, 3.3514053905092016, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "avv28lv5i6", "mag": 6.098472695547137, "time": 1590392752008.6292}, "geometry": { "type": "Point", "coordinates": [-76.52588772764622, 3.348928569311485, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "agufybmru0", "mag": 5.252966609030711, "time": 1590863390750.3748}, "geometry": { "type": "Point", "coordinates": [-76.5237062053614, 3.3576823844879757, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "alit333obb", "mag": 5.541252040259963, "time": 1590706925760.3013}, "geometry": { "type": "Point", "coordinates": [-76.5378149048288, 3.404413132173893, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ac18gbpw24", "mag": 5.54179645348753, "time": 1591123140018.6814}, "geometry": { "type": "Point", "coordinates": [-76.54430084875571, 3.415576680038062, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ajvywj3drs", "mag": 4.946559625077648, "time": 1591187556718.0122}, "geometry": { "type": "Point", "coordinates": [-76.54341664878336, 3.408602703917061, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "awmue91v6k", "mag": 5.291778218955714, "time": 1590565533962.2078}, "geometry": { "type": "Point", "coordinates": [-76.5485780843187, 3.401008758183899, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "as068m9hg4", "mag": 6.22355986488549, "time": 1591353853579.0215}, "geometry": { "type": "Point", "coordinates": [-76.52790681062363, 3.4358741008888676, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "anmhb7bim7", "mag": 5.076179361976047, "time": 1590501730751.7546}, "geometry": { "type": "Point", "coordinates": [-76.52232144504961, 3.4099567992604856, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ajwrdpussk", "mag": 5.286729866954033, "time": 1590818273983.7717}, "geometry": { "type": "Point", "coordinates": [-76.53829098911422, 3.368036168953855, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "adfwqt9j5d", "mag": 4.33167473976885, "time": 1590498632488.732}, "geometry": { "type": "Point", "coordinates": [-76.53490402777734, 3.3595168170966856, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ahdwwjuucz", "mag": 4.147302180390794, "time": 1591096768005.3809}, "geometry": { "type": "Point", "coordinates": [-76.52626214253321, 3.4421313132594364, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a0ntgspq9l", "mag": 4.322877449288635, "time": 1591287978947.1545}, "geometry": { "type": "Point", "coordinates": [-76.52835850684508, 3.410855579848045, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a2nbtwa294", "mag": 4.302178703569898, "time": 1590990563690.5332}, "geometry": { "type": "Point", "coordinates": [-76.52108962737316, 3.4021568262281194, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a9gsybooys", "mag": 5.496462378649193, "time": 1590672171632.6448}, "geometry": { "type": "Point", "coordinates": [-76.5422566212066, 3.4238421824492073, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aigtcae5db", "mag": 6.395445474698821, "time": 1590897072469.701}, "geometry": { "type": "Point", "coordinates": [-76.54139777239686, 3.4307600872007096, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "anwghxhw3f", "mag": 5.620895634043815, "time": 1590658814165.4536}, "geometry": { "type": "Point", "coordinates": [-76.5205867991387, 3.4443156795993, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "axb2fyddje", "mag": 5.62237690564509, "time": 1590644599292.2185}, "geometry": { "type": "Point", "coordinates": [-76.52184576525949, 3.3901630330333936, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a7fg5st4mp", "mag": 5.607335837583258, "time": 1591210527182.6987}, "geometry": { "type": "Point", "coordinates": [-76.5253227962999, 3.4260552267744413, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "afuhka4npl", "mag": 5.1379673187853347, "time": 1591318502983.3152}, "geometry": { "type": "Point", "coordinates": [-76.53262713085887, 3.394647494619808, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aidw58bg2e", "mag": 5.301753623296591, "time": 1590941394541.7017}, "geometry": { "type": "Point", "coordinates": [-76.52034748606333, 3.3788845329750408, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aobpz9j8hm", "mag": 4.222596741660199, "time": 1591147095668.7617}, "geometry": { "type": "Point", "coordinates": [-76.54961396294539, 3.4450204942296994, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ad0noi0p7m", "mag": 5.745601185057607, "time": 1591137307812.0376}, "geometry": { "type": "Point", "coordinates": [-76.53242445286446, 3.4075555254136796, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a54cr8zq27", "mag": 4.736852896233407, "time": 1591183398920.3364}, "geometry": { "type": "Point", "coordinates": [-76.52357838985401, 3.3755039298270817, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a6kfzb9zxo", "mag": 6.832538111119236, "time": 1590851240017.4482}, "geometry": { "type": "Point", "coordinates": [-76.52671013847512, 3.4001529039372502, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ajdnhtemzp", "mag": 5.480401476108471, "time": 1591356579579.442}, "geometry": { "type": "Point", "coordinates": [-76.52570480248062, 3.454323203289692, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a8ekcgn3s6", "mag": 6.117821517746576, "time": 1590517179032.7107}, "geometry": { "type": "Point", "coordinates": [-76.53271296813539, 3.372975351147062, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "apxuzyreb1", "mag": 5.252088393564085, "time": 1591197368127.962}, "geometry": { "type": "Point", "coordinates": [-76.53466075411806, 3.457344788512799, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aivha7sln2", "mag": 5.9638209949004315, "time": 1591256672034.607}, "geometry": { "type": "Point", "coordinates": [-76.52590889509345, 3.406344496228851, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a0p6yklblq", "mag": 4.9952799871470708, "time": 1590586433215.8713}, "geometry": { "type": "Point", "coordinates": [-76.52491558556339, 3.450527517888284, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "atg7icocp3", "mag": 4.2589427708320033, "time": 1590450977677.6958}, "geometry": { "type": "Point", "coordinates": [-76.5465751642595, 3.3463377636104146, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "af663gdh16", "mag": 4.510223201638783, "time": 1591409616671.3943}, "geometry": { "type": "Point", "coordinates": [-76.52107912380555, 3.386740268801889, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ah7gswlaac", "mag": 4.3306280174178386, "time": 1591261726741.1255}, "geometry": { "type": "Point", "coordinates": [-76.53386479213896, 3.439270536448474, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "asyeqsuhlk", "mag": 4.9180408029450247, "time": 1591128333476.0928}, "geometry": { "type": "Point", "coordinates": [-76.5275076696145, 3.402769862919363, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "avzxd1843b", "mag": 4.187877349560506, "time": 1590731845852.9868}, "geometry": { "type": "Point", "coordinates": [-76.53550838441612, 3.379252229355546, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aai39l74av", "mag": 4.0133410499991626, "time": 1590371447408.7693}, "geometry": { "type": "Point", "coordinates": [-76.54445517821898, 3.3977600871135785, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "axxprac55u", "mag": 4.7221884854958835, "time": 1591077634449.8271}, "geometry": { "type": "Point", "coordinates": [-76.54406723348843, 3.3655007312114145, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ayin2tc3rq", "mag": 5.2381997162710747, "time": 1591257669545.0403}, "geometry": { "type": "Point", "coordinates": [-76.54764495329638, 3.3508465696905234, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a7e8l4hvy2", "mag": 5.794275428907839, "time": 1591315926798.9705}, "geometry": { "type": "Point", "coordinates": [-76.52625899464188, 3.35844295232192, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a14nq9419o", "mag": 5.209894623222988, "time": 1591451327664.1523}, "geometry": { "type": "Point", "coordinates": [-76.53519692375441, 3.458862507713648, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aev0b95hqq", "mag": 4.6100486927193955, "time": 1590485578416.6365}, "geometry": { "type": "Point", "coordinates": [-76.52143102164852, 3.4253723036599424, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "abree2t465", "mag": 6.488944412076213, "time": 1590581401438.9353}, "geometry": { "type": "Point", "coordinates": [-76.52928498831442, 3.445606921989227, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a1jv0l0hcm", "mag": 5.69469638850802, "time": 1591342853010.1462}, "geometry": { "type": "Point", "coordinates": [-76.53187108807522, 3.4058995729587926, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a7hz809lb3", "mag": 4.4650918132820285, "time": 1591102396427.65}, "geometry": { "type": "Point", "coordinates": [-76.54451300188681, 3.4216599151411717, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ag07eo1kib", "mag": 4.042229602622605, "time": 1590466521307.2634}, "geometry": { "type": "Point", "coordinates": [-76.54028830386, 3.4200496794538817, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "akki8qio13", "mag": 5.6579445739903695, "time": 1590647209498.7534}, "geometry": { "type": "Point", "coordinates": [-76.52787694077551, 3.4203494937830663, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "axr7awyjoc", "mag": 6.603134805345933, "time": 1590411614064.5747}, "geometry": { "type": "Point", "coordinates": [-76.52014969571225, 3.3796914762713453, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "af5oshwaod", "mag": 5.1300407801945336, "time": 1590512295345.933}, "geometry": { "type": "Point", "coordinates": [-76.5467621045722, 3.431575223181237, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ahf4icxrrj", "mag": 6.674634942029957, "time": 1590417585739.636}, "geometry": { "type": "Point", "coordinates": [-76.5296275519204, 3.436165983723344, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ahyq5bap8i", "mag": 5.023704384185697, "time": 1590623828490.7515}, "geometry": { "type": "Point", "coordinates": [-76.53221868417131, 3.35859385992842, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ao2vzj8iff", "mag": 5.664034137177544, "time": 1590767143703.8542}, "geometry": { "type": "Point", "coordinates": [-76.52179770897614, 3.387382316787846, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aj8c2kzsf3", "mag": 4.974968230165298, "time": 1591373002748.7844}, "geometry": { "type": "Point", "coordinates": [-76.52051006839628, 3.4431347159860395, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a6g9qiarfp", "mag": 6.131574710893176, "time": 1590752297779.5854}, "geometry": { "type": "Point", "coordinates": [-76.53731888110173, 3.450191027434813, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ag1wgjktdj", "mag": 5.474537229199121, "time": 1590294927091.323}, "geometry": { "type": "Point", "coordinates": [-76.53381535681719, 3.3525179111896946, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aglz8paitl", "mag": 4.425214686673219, "time": 1590302225733.7559}, "geometry": { "type": "Point", "coordinates": [-76.53958935568679, 3.363935683853622, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ahh7xj3xbp", "mag": 5.42675873850335, "time": 1590325428002.1653}, "geometry": { "type": "Point", "coordinates": [-76.5237245191018, 3.4232473082474995, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ahh1huo7lf", "mag": 4.979160745903639, "time": 1590419891574.11}, "geometry": { "type": "Point", "coordinates": [-76.5420176959489, 3.357281447617262, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aklstbkkox", "mag": 5.6996829988510473, "time": 1590423012128.676}, "geometry": { "type": "Point", "coordinates": [-76.53235497398165, 3.3626205989255284, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a5dod02ym7", "mag": 4.987155055027134, "time": 1591268212009.1694}, "geometry": { "type": "Point", "coordinates": [-76.53504208491339, 3.4207301139677804, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a993gkxxqk", "mag": 6.374871966544861, "time": 1591142886852.988}, "geometry": { "type": "Point", "coordinates": [-76.5414228992964, 3.4387505511860077, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a6oxsn9p8w", "mag": 6.669760507915214, "time": 1591392811642.7388}, "geometry": { "type": "Point", "coordinates": [-76.5378083214375, 3.4238015622108207, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "apcg7cekw2", "mag": 5.712076292904504, "time": 1590496009158.3025}, "geometry": { "type": "Point", "coordinates": [-76.52540201053695, 3.3547279310852693, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "adz1szizy5", "mag": 6.2295681647010737, "time": 1591228191572.527}, "geometry": { "type": "Point", "coordinates": [-76.54749262868737, 3.341296732010449, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ab3k56ee52", "mag": 6.4070135042841985, "time": 1590494059228.7444}, "geometry": { "type": "Point", "coordinates": [-76.52844428572139, 3.3404079886242632, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "agxoe0r6hz", "mag": 6.9952721116043968, "time": 1591423433117.169}, "geometry": { "type": "Point", "coordinates": [-76.52794197732601, 3.38422829500393, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "afvh3mkc52", "mag": 4.638158597201578, "time": 1591012415146.1362}, "geometry": { "type": "Point", "coordinates": [-76.53037454935969, 3.367427811607987, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "au16mqogcq", "mag": 4.844300565072253, "time": 1590422487617.0234}, "geometry": { "type": "Point", "coordinates": [-76.52010367880047, 3.435820134971234, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "awnv1f480u", "mag": 6.7946133904741837, "time": 1590467918953.744}, "geometry": { "type": "Point", "coordinates": [-76.5412189723892, 3.409308281654059, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "an0rzcnn35", "mag": 4.466446806398877, "time": 1591087947497.4644}, "geometry": { "type": "Point", "coordinates": [-76.52895214677002, 3.387854693370593, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "adb6uxr8xj", "mag": 4.590606054465383, "time": 1590287144726.5251}, "geometry": { "type": "Point", "coordinates": [-76.52644470708061, 3.4100908802033496, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "awaar7xtxu", "mag": 6.488646871135896, "time": 1590717250334.7976}, "geometry": { "type": "Point", "coordinates": [-76.53486242134952, 3.3728976212296193, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aaaydq2rr2", "mag": 5.128413370038061, "time": 1591226600445.764}, "geometry": { "type": "Point", "coordinates": [-76.52302958887503, 3.445228598564748, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "at0x3fjlr8", "mag": 6.82620885830082, "time": 1590654733598.4976}, "geometry": { "type": "Point", "coordinates": [-76.54497270502188, 3.4468178280996966, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "agngwb85p2", "mag": 3.2324486173801485, "time": 1591036610800.8225}, "geometry": { "type": "Point", "coordinates": [-76.5291611808336, 3.37248480754392, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "adawnwl5td", "mag": 6.337168200331246, "time": 1590580665148.7312}, "geometry": { "type": "Point", "coordinates": [-76.52203583795247, 3.3918914352579708, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "at28unyw7y", "mag": 6.729737234739471, "time": 1590791320518.2908}, "geometry": { "type": "Point", "coordinates": [-76.54779612342767, 3.355794128911201, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "as1na1dvcx", "mag": 5.337121186797509, "time": 1590854305966.2817}, "geometry": { "type": "Point", "coordinates": [-76.54692053508683, 3.442644924093171, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aj32qv2zv6", "mag": 4.8898731712384333, "time": 1591264969057.686}, "geometry": { "type": "Point", "coordinates": [-76.54624683903576, 3.4097563828532667, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ao463sx88p", "mag": 4.344396877212471, "time": 1590471178357.881}, "geometry": { "type": "Point", "coordinates": [-76.52553707176973, 3.4022004914645736, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ag3a5bmm51", "mag": 6.214878159272413, "time": 1591165253595.9775}, "geometry": { "type": "Point", "coordinates": [-76.52762116131605, 3.3806320857469174, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aadu2bhqaw", "mag": 4.094042571857267, "time": 1590855668080.5696}, "geometry": { "type": "Point", "coordinates": [-76.52838474743332, 3.378972917653848, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "an25v0kgpv", "mag": 6.272359308737471, "time": 1591344461981.7415}, "geometry": { "type": "Point", "coordinates": [-76.53012522085673, 3.369051206580121, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "afw83uwqoi", "mag": 6.715281570369506, "time": 1590875158797.0542}, "geometry": { "type": "Point", "coordinates": [-76.5491880221409, 3.3934976393505285, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aitukucyn6", "mag": 5.549861860981662, "time": 1590585916718.7563}, "geometry": { "type": "Point", "coordinates": [-76.52860404111355, 3.363944362013321, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "axavp5lfh6", "mag": 5.429068588494473, "time": 1590513122321.284}, "geometry": { "type": "Point", "coordinates": [-76.5361171939515, 3.4099462055061975, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "adipbiwz18", "mag": 6.571161342603247, "time": 1590549361581.4287}, "geometry": { "type": "Point", "coordinates": [-76.5443811190365, 3.4502847815111997, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "awqi90sxtp", "mag": 6.345583240381141, "time": 1590994367813.3496}, "geometry": { "type": "Point", "coordinates": [-76.54176564829712, 3.3897003036072215, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a2n7xqjxo2", "mag": 3.636250715377572, "time": 1590602576423.4495}, "geometry": { "type": "Point", "coordinates": [-76.5453847472783, 3.4411657899081347, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ajf40td378", "mag": 5.7878115531338525, "time": 1590592353949.0818}, "geometry": { "type": "Point", "coordinates": [-76.52763171855727, 3.3856689270943034, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ahjxakozbh", "mag": 5.817780883686886, "time": 1591367541890.9973}, "geometry": { "type": "Point", "coordinates": [-76.5236255979586, 3.383862967538506, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a32wdde9an", "mag": 5.923065961941843, "time": 1590688702336.4038}, "geometry": { "type": "Point", "coordinates": [-76.5284181517489, 3.384635537965842, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a4zwim6gf6", "mag": 6.937162698424786, "time": 1591183541775.9155}, "geometry": { "type": "Point", "coordinates": [-76.54346955403753, 3.423440085406911, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aexxiirtsx", "mag": 5.744555357804331, "time": 1590576133200.517}, "geometry": { "type": "Point", "coordinates": [-76.53156338433448, 3.443266520473047, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a8zjznfdm8", "mag": 4.5540376901022217, "time": 1590999918338.167}, "geometry": { "type": "Point", "coordinates": [-76.54115825606173, 3.4509133304847506, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ajnxxduyf3", "mag": 4.9629198400985937, "time": 1590836777918.2344}, "geometry": { "type": "Point", "coordinates": [-76.54957031682619, 3.438008036639423, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a0q05ucmqq", "mag": 5.147263203465443, "time": 1590962234342.614}, "geometry": { "type": "Point", "coordinates": [-76.53534681209561, 3.365263764487831, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aytj8rzlut", "mag": 4.0235726602122996, "time": 1590860316999.4224}, "geometry": { "type": "Point", "coordinates": [-76.52380956081805, 3.364118243668031, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aexjx930tx", "mag": 4.8139845378181034, "time": 1591191154779.3745}, "geometry": { "type": "Point", "coordinates": [-76.52711514891944, 3.36396074958992, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aq159so129", "mag": 4.163831528248609, "time": 1591189535691.2913}, "geometry": { "type": "Point", "coordinates": [-76.52161929115896, 3.3523073458286583, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "amlgee6xiu", "mag": 3.385571947606805, "time": 1591347779939.766}, "geometry": { "type": "Point", "coordinates": [-76.52195899422398, 3.3978917345137654, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a92gctkj8f", "mag": 5.1196830521260885, "time": 1591430904356.8118}, "geometry": { "type": "Point", "coordinates": [-76.52870797803263, 3.3967816606058507, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a2umsga4o3", "mag": 5.7621089317235707, "time": 1590585287811.7458}, "geometry": { "type": "Point", "coordinates": [-76.54093888165121, 3.3798796793588886, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aubig4rj0t", "mag": 6.9515733100805415, "time": 1591019817611.508}, "geometry": { "type": "Point", "coordinates": [-76.54332267873622, 3.4029281692830624, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "anmq3wt7ai", "mag": 5.8893047016093245, "time": 1590749629885.7324}, "geometry": { "type": "Point", "coordinates": [-76.54509588056054, 3.344179435568159, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ana649u2yu", "mag": 6.323852919289591, "time": 1590898792735.2383}, "geometry": { "type": "Point", "coordinates": [-76.52087824597535, 3.453770085893807, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aur9wrtjt4", "mag": 5.808511446584765, "time": 1591138571003.8232}, "geometry": { "type": "Point", "coordinates": [-76.53431677342503, 3.352119691722332, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a8icxosjsq", "mag": 5.2257634299732536, "time": 1591439763104.1006}, "geometry": { "type": "Point", "coordinates": [-76.52923988368585, 3.342077770677858, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "adbhqwjr9a", "mag": 5.402618232813788, "time": 1591295165208.3413}, "geometry": { "type": "Point", "coordinates": [-76.54822642412702, 3.3439328784418256, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a5rahke01g", "mag": 5.5240844679079926, "time": 1591454182487.7756}, "geometry": { "type": "Point", "coordinates": [-76.52210094086112, 3.418098005741128, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ax56psc5vy", "mag": 4.23646774810671, "time": 1591040849617.8477}, "geometry": { "type": "Point", "coordinates": [-76.54805302111023, 3.4095196940322094, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a9zlp36myt", "mag": 6.265487811386933, "time": 1590441115135.1394}, "geometry": { "type": "Point", "coordinates": [-76.5225325450378, 3.4514756945808305, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "av0zukn1cz", "mag": 6.289864252357015, "time": 1591128869536.4543}, "geometry": { "type": "Point", "coordinates": [-76.5333062962693, 3.341389309455868, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aurip83xrn", "mag": 6.971232136325022, "time": 1591349084262.5347}, "geometry": { "type": "Point", "coordinates": [-76.54301941180377, 3.430847190097726, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "az0adsp9zj", "mag": 6.6021415107663115, "time": 1591366458041.263}, "geometry": { "type": "Point", "coordinates": [-76.52131464967857, 3.384095083335518, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aqwbpetalr", "mag": 6.2045126338157375, "time": 1590788803960.042}, "geometry": { "type": "Point", "coordinates": [-76.52574579376892, 3.4467954741074323, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a9jgaqxap8", "mag": 6.102316734497019, "time": 1591128810720.791}, "geometry": { "type": "Point", "coordinates": [-76.54248058865777, 3.43986223022584, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "axuajqfh0o", "mag": 6.130527323826284, "time": 1590432888806.0613}, "geometry": { "type": "Point", "coordinates": [-76.53756034574236, 3.388932245299404, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "avmcjkumsg", "mag": 4.3625248305160795, "time": 1590673989961.3323}, "geometry": { "type": "Point", "coordinates": [-76.53737190865205, 3.4349087433721035, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "abbwbg3o86", "mag": 6.864754909588159, "time": 1591239514636.93}, "geometry": { "type": "Point", "coordinates": [-76.5313078367614, 3.3558297903342806, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a1wo0fjvv3", "mag": 4.476974321828643, "time": 1590987383158.487}, "geometry": { "type": "Point", "coordinates": [-76.5464325262124, 3.371897119167004, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aqzmg9qmr7", "mag": 6.7823664113645354, "time": 1591127532357.7476}, "geometry": { "type": "Point", "coordinates": [-76.53224530167645, 3.3573960921615584, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "a6nu7uu6qm", "mag": 6.1298829602561575, "time": 1590979074538.1714}, "geometry": { "type": "Point", "coordinates": [-76.53499939284487, 3.4222772161001846, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "aiwou91hay", "mag": 5.0630570454251487, "time": 1590331113075.9128}, "geometry": { "type": "Point", "coordinates": [-76.53719688514263, 3.455339270748972, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "alq1g4ns2b", "mag": 5.4447248454523045, "time": 1590492708580.9556}, "geometry": { "type": "Point", "coordinates": [-76.52757182053135, 3.3534795587455424, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "ab6o00689v", "mag": 4.019400718120078, "time": 1590964588842.2207}, "geometry": { "type": "Point", "coordinates": [-76.52913769503621, 3.404111309124632, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "af8jhjldob", "mag": 5.139033355556014, "time": 1590987175432.0527}, "geometry": { "type": "Point", "coordinates": [-76.53676949519395, 3.3738793950852886, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "agm8oszb4u", "mag": 5.499274582762123, "time": 1590848958715.246}, "geometry": { "type": "Point", "coordinates": [-76.52741800296032, 3.4149973515181924, 0] } },
        {"properties": {"contaminante": "ICA", "id":  "arrkbkke8x", "mag": 6.389341907124002, "time": 1591108273061.3281}, "geometry": { "type": "Point", "coordinates": [-76.53186974842033, 3.377081626820912, 0] } },
        
        {"properties": {"contaminante": "pm10", "id":  "auxbl5vbi8", "mag": 6.318860941145744, "time": 1590639918782.9192}, "geometry": { "type": "Point", "coordinates": [-76.5301220015476, 3.3755176876935504, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a562pfpau7", "mag": 6.717387926098211, "time": 1590485038003.884}, "geometry": { "type": "Point", "coordinates": [-76.54459219118037, 3.4440202875150376, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ahdobv0m44", "mag": 4.978477026342857, "time": 1590535804771.1958}, "geometry": { "type": "Point", "coordinates": [-76.52370992689005, 3.3586727238061265, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "am5mvgew57", "mag": 6.360974070323441, "time": 1590612704288.9587}, "geometry": { "type": "Point", "coordinates": [-76.53131686555369, 3.384414641371163, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ahrtm3hqg4", "mag": 5.5017005341466563, "time": 1590968163726.856}, "geometry": { "type": "Point", "coordinates": [-76.53117872308752, 3.413921141692366, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aezzy29cz7", "mag": 5.437757657623055, "time": 1591385289397.2607}, "geometry": { "type": "Point", "coordinates": [-76.54556449005187, 3.4117918446458995, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "axulflg7qj", "mag": 5.527031459448773, "time": 1591266414346.7825}, "geometry": { "type": "Point", "coordinates": [-76.54731928429032, 3.34990276123995, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ad0x6k7yfs", "mag": 4.001684951563292, "time": 1591221753818.8032}, "geometry": { "type": "Point", "coordinates": [-76.53299182865169, 3.35609596527484, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "anr5qsf3ly", "mag": 6.287811110738284, "time": 1591276450510.5244}, "geometry": { "type": "Point", "coordinates": [-76.54237252601851, 3.428743493601644, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "axbcnpofpy", "mag": 6.136153763358676, "time": 1590730821836.6106}, "geometry": { "type": "Point", "coordinates": [-76.53331483155866, 3.3905555164360983, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ax120hzjot", "mag": 3.3832907562873373, "time": 1591049217402.673}, "geometry": { "type": "Point", "coordinates": [-76.54260505368518, 3.4465985754536073, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "alshy2gz02", "mag": 6.176457925449873, "time": 1591347178289.5176}, "geometry": { "type": "Point", "coordinates": [-76.53095861706107, 3.34575577318679, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a29wldhw5t", "mag": 5.3054582526517855, "time": 1590344410952.6453}, "geometry": { "type": "Point", "coordinates": [-76.53326186698281, 3.3510998601555433, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "awwv4uz328", "mag": 4.7133335259438196, "time": 1590358337939.5085}, "geometry": { "type": "Point", "coordinates": [-76.54492012344768, 3.4520578311878123, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aqn9p3h76s", "mag": 6.189513039185373, "time": 1590897586819.473}, "geometry": { "type": "Point", "coordinates": [-76.53391161017157, 3.4467386731735306, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "atqos3ze9a", "mag": 4.733065921686003, "time": 1590324289856.93}, "geometry": { "type": "Point", "coordinates": [-76.53830005803826, 3.4370693355327275, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "akuxasy89y", "mag": 6.207223980126843, "time": 1590433670556.4675}, "geometry": { "type": "Point", "coordinates": [-76.52501540852647, 3.415296797677927, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ad6r9j93f8", "mag": 4.8440219385722236, "time": 1590410273534.5403}, "geometry": { "type": "Point", "coordinates": [-76.53774074423289, 3.4413692233757236, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a3jdl9b2ys", "mag": 6.165189909196576, "time": 1591140143720.248}, "geometry": { "type": "Point", "coordinates": [-76.53751155604982, 3.390278348117506, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "afap0vqedn", "mag": 6.66531807870139, "time": 1590536960047.868}, "geometry": { "type": "Point", "coordinates": [-76.53155754104287, 3.3819663573430723, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aikh2h62ad", "mag": 5.844480573556043, "time": 1591162548614.6025}, "geometry": { "type": "Point", "coordinates": [-76.53986164980796, 3.444392158391613, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aazygmkzb5", "mag": 3.7488913448497856, "time": 1591367226277.5173}, "geometry": { "type": "Point", "coordinates": [-76.54957337606366, 3.3908243771454374, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ad5pee0snh", "mag": 4.3515303880080634, "time": 1591310165005.3354}, "geometry": { "type": "Point", "coordinates": [-76.52513499238904, 3.3464570957860453, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "agiqf05s3z", "mag": 5.923271113046486, "time": 1590927402030.8171}, "geometry": { "type": "Point", "coordinates": [-76.52105861887001, 3.44531963896626, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ag0phb4nr0", "mag": 4.069609148192936, "time": 1590452747754.3982}, "geometry": { "type": "Point", "coordinates": [-76.52268910173686, 3.4227759242690086, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "asjm26bmfg", "mag": 5.607262230613605, "time": 1591414032228.1638}, "geometry": { "type": "Point", "coordinates": [-76.53744071675698, 3.3746558025223723, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "adammizz5g", "mag": 6.143145539024412, "time": 1590653720255.1643}, "geometry": { "type": "Point", "coordinates": [-76.53342346894631, 3.45234302712086, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ayfbetsk9c", "mag": 3.6511167956777353, "time": 1591010549951.1555}, "geometry": { "type": "Point", "coordinates": [-76.5330369114349, 3.3477696784026323, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aqj29smn7u", "mag": 3.864237159665747, "time": 1591386609918.3088}, "geometry": { "type": "Point", "coordinates": [-76.54456355708655, 3.443755210051196, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ajlx2rmrvu", "mag": 4.928783699974468, "time": 1591369534748.2573}, "geometry": { "type": "Point", "coordinates": [-76.53529451465594, 3.3761048529364666, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "asku3okusg", "mag": 4.3285602269058163, "time": 1590958072292.6436}, "geometry": { "type": "Point", "coordinates": [-76.52969840936578, 3.418654504823087, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "akatmjkssl", "mag": 4.1037586919125575, "time": 1591417988218.4104}, "geometry": { "type": "Point", "coordinates": [-76.5471831264517, 3.4071771422336714, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "afoswe6f8d", "mag": 6.110918162965374, "time": 1590993013162.0764}, "geometry": { "type": "Point", "coordinates": [-76.53240969824621, 3.3863214717800374, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "adibsk92qi", "mag": 5.255905295836206, "time": 1590616482719.1772}, "geometry": { "type": "Point", "coordinates": [-76.53174908236295, 3.358572345349293, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a84f0bv269", "mag": 4.40857257953703, "time": 1590302364177.8096}, "geometry": { "type": "Point", "coordinates": [-76.52016582873101, 3.4316860261659463, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aa91cxvcu9", "mag": 5.048049862142047, "time": 1590450683883.394}, "geometry": { "type": "Point", "coordinates": [-76.53873054794474, 3.3615371167443793, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ayiuccrd08", "mag": 3.318271523226816, "time": 1591110426971.5671}, "geometry": { "type": "Point", "coordinates": [-76.52763085849698, 3.4320371372550857, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a44d3dwl0h", "mag": 4.053779177821109, "time": 1590443277144.4758}, "geometry": { "type": "Point", "coordinates": [-76.52603046594778, 3.3835640138500342, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "arn7mgnzo4", "mag": 3.319024478898302, "time": 1591459196436.2705}, "geometry": { "type": "Point", "coordinates": [-76.53230884613625, 3.424374973551623, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "avk5fznf44", "mag": 5.687147459378936, "time": 1591297504918.1345}, "geometry": { "type": "Point", "coordinates": [-76.53439016619771, 3.380803064842082, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "awcccichyi", "mag": 5.464961656301399, "time": 1591098792246.7402}, "geometry": { "type": "Point", "coordinates": [-76.54000186444893, 3.3741050146390656, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "avbvnat5ga", "mag": 5.974831918105554, "time": 1591437002635.4705}, "geometry": { "type": "Point", "coordinates": [-76.52045513600048, 3.395069449006682, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a1rncqdako", "mag": 5.126493603872145, "time": 1591310931819.0417}, "geometry": { "type": "Point", "coordinates": [-76.52774293748978, 3.4226192929621297, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ase5f5iji0", "mag": 6.252348318854954, "time": 1591318443739.3884}, "geometry": { "type": "Point", "coordinates": [-76.54899951078973, 3.4055803485360197, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aoo3txp26t", "mag": 3.582836782333046, "time": 1591177428767.5583}, "geometry": { "type": "Point", "coordinates": [-76.53952005940353, 3.3803824690020723, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a53kspgfnd", "mag": 4.8677711292250576, "time": 1590995577164.9907}, "geometry": { "type": "Point", "coordinates": [-76.52958900775204, 3.3700525648095674, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a3v4lkpnx7", "mag": 4.631733934043404, "time": 1591009528724.3018}, "geometry": { "type": "Point", "coordinates": [-76.54474720758199, 3.363888032254968, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a30tc1rd2b", "mag": 6.864172857516898, "time": 1591085154283.2683}, "geometry": { "type": "Point", "coordinates": [-76.5411702247061, 3.3752586792346495, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ak96vke2g9", "mag": 4.634145391431682, "time": 1590285378923.49}, "geometry": { "type": "Point", "coordinates": [-76.5241766130362, 3.396807203514061, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ag2z6jf1vp", "mag": 3.34612697997077, "time": 1591154863072.4214}, "geometry": { "type": "Point", "coordinates": [-76.52198207713487, 3.376266368389926, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aon35gxujh", "mag": 6.09392905421446, "time": 1591257335663.7588}, "geometry": { "type": "Point", "coordinates": [-76.54160496730766, 3.4183199854996014, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ablnrd6o9k", "mag": 3.6943357213546975, "time": 1590685922079.6677}, "geometry": { "type": "Point", "coordinates": [-76.52611915669527, 3.3754370758973806, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "apcod1m1up", "mag": 4.31194587786515, "time": 1591285415354.6753}, "geometry": { "type": "Point", "coordinates": [-76.54894988418785, 3.45073417374687, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ae0ezew5ez", "mag": 4.5486392106277345, "time": 1590681592947.0447}, "geometry": { "type": "Point", "coordinates": [-76.53741831274822, 3.446593534375047, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "awtm0bh6ag", "mag": 4.075371370334285, "time": 1591134982348.384}, "geometry": { "type": "Point", "coordinates": [-76.54058273355876, 3.4414577639369264, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "awnl5bbivx", "mag": 3.175192623458611, "time": 1591203991294.4312}, "geometry": { "type": "Point", "coordinates": [-76.52186744317687, 3.36315483052951, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a0ickgw16s", "mag": 3.9332136586434356, "time": 1591114832261.5967}, "geometry": { "type": "Point", "coordinates": [-76.53193607582153, 3.4509751781449847, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ap8fqc08ce", "mag": 5.77616025180213, "time": 1591058187490.3547}, "geometry": { "type": "Point", "coordinates": [-76.53004153681302, 3.3512326750075516, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aqc1t6pt1k", "mag": 6.482869080310751, "time": 1590767064791.4966}, "geometry": { "type": "Point", "coordinates": [-76.54704958587806, 3.3892284045058494, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "avhjreiq4n", "mag": 3.763240649989226, "time": 1591213942263.3494}, "geometry": { "type": "Point", "coordinates": [-76.53515264299695, 3.3580439629831873, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "avhbli4pzs", "mag": 5.105524421290156, "time": 1591029347520.7568}, "geometry": { "type": "Point", "coordinates": [-76.53302629584533, 3.395615936112639, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aw6s6rzy3m", "mag": 6.149259502109776, "time": 1590705929654.5696}, "geometry": { "type": "Point", "coordinates": [-76.54815144826526, 3.4407237502568226, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "apv9l66qme", "mag": 3.88507020844076, "time": 1591029794322.239}, "geometry": { "type": "Point", "coordinates": [-76.52600776176853, 3.40851911068252, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "afe8ewcku5", "mag": 4.083114734717206, "time": 1590826066618.154}, "geometry": { "type": "Point", "coordinates": [-76.54951465214462, 3.451396623266345, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ae4q2i7a34", "mag": 6.854734803882728, "time": 1590603304297.7598}, "geometry": { "type": "Point", "coordinates": [-76.53938409246643, 3.458134543205156, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "afsoq3itjr", "mag": 4.1697245353773735, "time": 1590948808538.5364}, "geometry": { "type": "Point", "coordinates": [-76.53714393988338, 3.44073185203236, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aub5xaudq2", "mag": 4.9234930159122112, "time": 1590891804081.0518}, "geometry": { "type": "Point", "coordinates": [-76.54307124055434, 3.3562459809860172, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aaqhvaa803", "mag": 6.736812479007773, "time": 1590928132236.6252}, "geometry": { "type": "Point", "coordinates": [-76.54686978915957, 3.398582063744964, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "alyl0f85n0", "mag": 5.019312904848254, "time": 1590582692611.2585}, "geometry": { "type": "Point", "coordinates": [-76.54136764799273, 3.3813665677238185, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a4yiownc7k", "mag": 4.7332982843922684, "time": 1591227403855.8318}, "geometry": { "type": "Point", "coordinates": [-76.52642347161269, 3.375394440353723, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ara4e55edi", "mag": 5.253905877682586, "time": 1591251228409.6445}, "geometry": { "type": "Point", "coordinates": [-76.53548556548067, 3.418533133785991, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ay9dbex10f", "mag": 6.246300787784401, "time": 1591009775545.982}, "geometry": { "type": "Point", "coordinates": [-76.54464277596261, 3.4327519828125537, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "adwe4j21yj", "mag": 5.639682599636215, "time": 1591418400728.4106}, "geometry": { "type": "Point", "coordinates": [-76.54341679175627, 3.3547550273155213, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aclc6cwbgy", "mag": 4.9029009398071572, "time": 1590753949030.4592}, "geometry": { "type": "Point", "coordinates": [-76.53490620211772, 3.383372867710026, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a490ryqbme", "mag": 6.886637759742833, "time": 1590909819864.3794}, "geometry": { "type": "Point", "coordinates": [-76.5245444536156, 3.430329781981914, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ake2p40hse", "mag": 4.8698144931300815, "time": 1591395191841.9607}, "geometry": { "type": "Point", "coordinates": [-76.54951705049314, 3.377729186107572, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a2x9e7nb2p", "mag": 4.451743201327198, "time": 1590712595806.901}, "geometry": { "type": "Point", "coordinates": [-76.54643226740312, 3.3594368112867046, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ajx0rjlooa", "mag": 4.24120964859126, "time": 1591453783700.5647}, "geometry": { "type": "Point", "coordinates": [-76.5458405280084, 3.386517762203506, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aljy723qsv", "mag": 3.7926857660099174, "time": 1591452541196.7886}, "geometry": { "type": "Point", "coordinates": [-76.54679443933577, 3.3486849362953945, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aiuxkavut4", "mag": 5.841313310473218, "time": 1591020256132.9927}, "geometry": { "type": "Point", "coordinates": [-76.5308281994937, 3.451399409992353, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aerz4rup3e", "mag": 4.418200372463783, "time": 1591327553746.835}, "geometry": { "type": "Point", "coordinates": [-76.52253706057574, 3.3496176702502063, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "alh84ysksc", "mag": 4.199656359516638, "time": 1590342598305.5405}, "geometry": { "type": "Point", "coordinates": [-76.52599043595309, 3.403641434638868, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "at9nefg1jz", "mag": 4.9001418807209847, "time": 1591067633526.1082}, "geometry": { "type": "Point", "coordinates": [-76.54838797971576, 3.415921334923181, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aeiacomb8x", "mag": 3.42850611357076, "time": 1591266440359.4902}, "geometry": { "type": "Point", "coordinates": [-76.54535529467309, 3.417315435698568, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "asgodjj03p", "mag": 3.7325295278342567, "time": 1590657852163.69}, "geometry": { "type": "Point", "coordinates": [-76.54441067285366, 3.424251606838538, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "arwk8bqpjs", "mag": 6.776996675129686, "time": 1590955533347.6738}, "geometry": { "type": "Point", "coordinates": [-76.52926592051284, 3.367081712306027, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "awqi9kxami", "mag": 3.800177425973193, "time": 1590848341278.8784}, "geometry": { "type": "Point", "coordinates": [-76.53305025477019, 3.4476318607654632, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aunyt5v7k6", "mag": 4.399425728240593, "time": 1590277953835.7493}, "geometry": { "type": "Point", "coordinates": [-76.54034972572104, 3.3552489313147293, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a5o19z1w60", "mag": 6.624521667254482, "time": 1590760184278.4863}, "geometry": { "type": "Point", "coordinates": [-76.53193328695278, 3.402203753508237, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a2w0nmzjux", "mag": 4.9783742627726477, "time": 1590909555295.609}, "geometry": { "type": "Point", "coordinates": [-76.54021136438864, 3.434056199370352, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ax9cqb8sme", "mag": 5.951545912906949, "time": 1591349261352.113}, "geometry": { "type": "Point", "coordinates": [-76.54515166035785, 3.4302127163767713, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ax0j43tub1", "mag": 4.329839686790995, "time": 1590438055305.4304}, "geometry": { "type": "Point", "coordinates": [-76.54840710626496, 3.379608338004502, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "afjztbevoh", "mag": 4.4718614025698376, "time": 1590587225262.941}, "geometry": { "type": "Point", "coordinates": [-76.54294726370222, 3.3734067169865027, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a3gvugwfbx", "mag": 4.947863212336543, "time": 1591090599809.6504}, "geometry": { "type": "Point", "coordinates": [-76.52049513663039, 3.419882407193583, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a2buqpy2on", "mag": 5.624956615708115, "time": 1591435913595.9668}, "geometry": { "type": "Point", "coordinates": [-76.5226268959511, 3.361857940828765, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a61lv3hqk9", "mag": 3.4232494228460624, "time": 1590567203715.3628}, "geometry": { "type": "Point", "coordinates": [-76.52513549814627, 3.387559034033671, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a52d61w3rv", "mag": 6.596931734527622, "time": 1590677505707.7385}, "geometry": { "type": "Point", "coordinates": [-76.5490432034392, 3.381494044895668, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "awkbho34xf", "mag": 4.8113161256070347, "time": 1590855008865.8508}, "geometry": { "type": "Point", "coordinates": [-76.52422370831346, 3.3490056890634876, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "adrspe01p3", "mag": 6.787568170054479, "time": 1591253320045.683}, "geometry": { "type": "Point", "coordinates": [-76.52959753198974, 3.369725094934961, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "acs9bm4fg8", "mag": 4.998438202341326, "time": 1591193865468.236}, "geometry": { "type": "Point", "coordinates": [-76.52422043383201, 3.4270747378023247, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "al4gr03xtx", "mag": 4.512198498977658, "time": 1590722631255.0198}, "geometry": { "type": "Point", "coordinates": [-76.52639594139167, 3.417524723312845, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "awypjjigr0", "mag": 5.139474950059034, "time": 1590491655053.4739}, "geometry": { "type": "Point", "coordinates": [-76.53573855174861, 3.3413364362949913, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aut9wbzzr1", "mag": 6.0430802637041925, "time": 1590977855233.9238}, "geometry": { "type": "Point", "coordinates": [-76.52670691505585, 3.438742849713825, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ayg1kty3o0", "mag": 4.929628909728333, "time": 1591211400001.5676}, "geometry": { "type": "Point", "coordinates": [-76.54648875840202, 3.3877190196549978, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aue1s2t4tg", "mag": 4.1405516944630865, "time": 1590445296638.7437}, "geometry": { "type": "Point", "coordinates": [-76.54696577315495, 3.41270476359991, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a5avoa7swv", "mag": 6.996174726144099, "time": 1590946862248.3032}, "geometry": { "type": "Point", "coordinates": [-76.54046931697164, 3.340770432400014, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ax0jzzzwka", "mag": 6.051191294654012, "time": 1590819465327.381}, "geometry": { "type": "Point", "coordinates": [-76.54292581845313, 3.4423587383208654, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a6b447ygk6", "mag": 4.987624664002948, "time": 1591204049891.9338}, "geometry": { "type": "Point", "coordinates": [-76.5262199333445, 3.362092216412807, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "awr3ap8zzh", "mag": 3.8543711891889347, "time": 1590902260667.1729}, "geometry": { "type": "Point", "coordinates": [-76.52166154565383, 3.4277385072820987, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ay9gn1id21", "mag": 5.823050584652972, "time": 1591411532779.0984}, "geometry": { "type": "Point", "coordinates": [-76.53250846155716, 3.458091817686965, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "al7bpkvx6f", "mag": 6.904060117518558, "time": 1590349728859.6362}, "geometry": { "type": "Point", "coordinates": [-76.5324003190318, 3.4288960137781603, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ac26dy89eu", "mag": 5.099225440021067, "time": 1590644697169.282}, "geometry": { "type": "Point", "coordinates": [-76.52492540114513, 3.367855840244968, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ax7x8wvnco", "mag": 6.829661801116464, "time": 1591094890800.5073}, "geometry": { "type": "Point", "coordinates": [-76.54583507841618, 3.362275972787022, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aik7lmpfhi", "mag": 4.858794476243895, "time": 1591306141981.6602}, "geometry": { "type": "Point", "coordinates": [-76.5379358988352, 3.4339579755040437, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ahtav8vifd", "mag": 4.094677607273052, "time": 1590506856258.2346}, "geometry": { "type": "Point", "coordinates": [-76.5420363386751, 3.401842385084987, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aao2ri8q5d", "mag": 5.881666694200336, "time": 1591091951933.5933}, "geometry": { "type": "Point", "coordinates": [-76.5227258020562, 3.347258640008134, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a3m7gq8r6b", "mag": 4.177768543057659, "time": 1591192149343.0564}, "geometry": { "type": "Point", "coordinates": [-76.52314230375035, 3.413660830494769, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "as6voc9t9r", "mag": 5.9998487233788795, "time": 1591277680378.3384}, "geometry": { "type": "Point", "coordinates": [-76.54689034337703, 3.4202060834147807, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "at86ki89f4", "mag": 4.2036359501717557, "time": 1591278948471.337}, "geometry": { "type": "Point", "coordinates": [-76.52016798447545, 3.4344549148608, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ag0so2b43s", "mag": 5.86964588964473, "time": 1590961173774.1401}, "geometry": { "type": "Point", "coordinates": [-76.5235036812504, 3.441545019276819, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "am9db97xt4", "mag": 4.244282657326659, "time": 1590895466157.7578}, "geometry": { "type": "Point", "coordinates": [-76.52262378555842, 3.4365857223754253, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "af5bjg8kkp", "mag": 3.992699363599918, "time": 1590569779327.5935}, "geometry": { "type": "Point", "coordinates": [-76.53710793632928, 3.389561539458298, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "az07zi3bj7", "mag": 4.978011987114469, "time": 1590328882499.5366}, "geometry": { "type": "Point", "coordinates": [-76.53782025355946, 3.4401913679001956, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "apft5nrj2a", "mag": 4.5570986817246046, "time": 1591119946054.5542}, "geometry": { "type": "Point", "coordinates": [-76.53330777948885, 3.398565235940062, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ahi2rw19kv", "mag": 6.26116219414462, "time": 1590715634959.79}, "geometry": { "type": "Point", "coordinates": [-76.54292435507327, 3.365076646657739, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a1lfpeef9h", "mag": 6.9903717676159385, "time": 1591310822478.0461}, "geometry": { "type": "Point", "coordinates": [-76.52414753198941, 3.4040260667638402, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a05hf5drhn", "mag": 4.056462016434594, "time": 1590617267969.0818}, "geometry": { "type": "Point", "coordinates": [-76.52274976267744, 3.367109914684925, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a03p7n7suy", "mag": 4.542102536854272, "time": 1590507966565.3677}, "geometry": { "type": "Point", "coordinates": [-76.5345511960954, 3.3857111099001718, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "acotztl9w1", "mag": 6.864721751471016, "time": 1590889340736.2996}, "geometry": { "type": "Point", "coordinates": [-76.545321364291, 3.424817127247655, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ashcei6rpv", "mag": 4.8019622216643962, "time": 1590757452038.2136}, "geometry": { "type": "Point", "coordinates": [-76.53047596487667, 3.3566428153114476, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aa0xkmt5fj", "mag": 6.0303877987163395, "time": 1590709713693.1758}, "geometry": { "type": "Point", "coordinates": [-76.54631873768871, 3.435187785073759, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "acr37cnzfw", "mag": 5.201818583336071, "time": 1591472287596.5269}, "geometry": { "type": "Point", "coordinates": [-76.53358056849368, 3.4208033722940074, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a4wgljar27", "mag": 3.1008392062514893, "time": 1591251790495.052}, "geometry": { "type": "Point", "coordinates": [-76.53912051067333, 3.4149893988312545, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aaerqi722m", "mag": 6.137276425400167, "time": 1591221706764.7969}, "geometry": { "type": "Point", "coordinates": [-76.53440899629804, 3.438207851133846, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "adkmp05jcq", "mag": 6.284675369052277, "time": 1590400873317.4707}, "geometry": { "type": "Point", "coordinates": [-76.53174367536482, 3.443414959584507, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ap3ckgjjvy", "mag": 5.113793697002971, "time": 1590760972537.4363}, "geometry": { "type": "Point", "coordinates": [-76.52009664165668, 3.431507554095035, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aqq4tvkugj", "mag": 3.969441831894626, "time": 1590400093669.7166}, "geometry": { "type": "Point", "coordinates": [-76.5349164689668, 3.439072656940836, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a3votbx7yf", "mag": 4.4351144250034555, "time": 1590272277614.0586}, "geometry": { "type": "Point", "coordinates": [-76.52315838356017, 3.3782355772902335, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ae2g3pxaj2", "mag": 4.567547985645602, "time": 1590521255434.762}, "geometry": { "type": "Point", "coordinates": [-76.54165111323508, 3.429307935732128, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "akpe12o14r", "mag": 3.7206778881116005, "time": 1590939767241.0435}, "geometry": { "type": "Point", "coordinates": [-76.53701235155705, 3.433414428396357, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "apr7fase6s", "mag": 3.5980101417442025, "time": 1591115350141.886}, "geometry": { "type": "Point", "coordinates": [-76.54692024838049, 3.4290592229987134, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ap43wce3gy", "mag": 4.233740221295007, "time": 1591445588379.7747}, "geometry": { "type": "Point", "coordinates": [-76.5271778123801, 3.3956502537400186, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ay57txd88e", "mag": 5.374769186475612, "time": 1590716184782.1184}, "geometry": { "type": "Point", "coordinates": [-76.54397697894834, 3.417558372705009, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "asx8tqurph", "mag": 6.905279027288371, "time": 1590625567461.7012}, "geometry": { "type": "Point", "coordinates": [-76.5431164018866, 3.353755549104458, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aqwshe1t6b", "mag": 4.8863184214405297, "time": 1590602381586.4414}, "geometry": { "type": "Point", "coordinates": [-76.53037492465835, 3.3426896778363533, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a9red2ha68", "mag": 6.072175958823342, "time": 1590777734362.6277}, "geometry": { "type": "Point", "coordinates": [-76.5477944135112, 3.356242794591381, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a1n6buojjx", "mag": 4.051936013028, "time": 1591197647516.5784}, "geometry": { "type": "Point", "coordinates": [-76.52056099567402, 3.40831769922416, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "an2rczffg3", "mag": 3.819121484921485, "time": 1590427137268.0679}, "geometry": { "type": "Point", "coordinates": [-76.53268091582895, 3.3569044458484942, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a1xsu31smq", "mag": 4.139091650862505, "time": 1590991522443.9304}, "geometry": { "type": "Point", "coordinates": [-76.52918709062048, 3.402115416433636, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aq8qz1ywm7", "mag": 4.083308297924083, "time": 1590661968191.628}, "geometry": { "type": "Point", "coordinates": [-76.53986826860354, 3.386638087265516, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "akxhi9kl5i", "mag": 3.3699201902914773, "time": 1590822166447.1006}, "geometry": { "type": "Point", "coordinates": [-76.5491390189285, 3.449745553895863, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "ap9vh44xhy", "mag": 4.8539089237245125, "time": 1591311606629.8225}, "geometry": { "type": "Point", "coordinates": [-76.54730307859795, 3.3646658945871524, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aue22m9mh3", "mag": 3.9086870859161342, "time": 1590645556920.182}, "geometry": { "type": "Point", "coordinates": [-76.53037171749166, 3.4337578070492976, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "a99bhzhvef", "mag": 5.634421945956658, "time": 1590500710879.9065}, "geometry": { "type": "Point", "coordinates": [-76.5357603277595, 3.454960426214188, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "abo924a5gg", "mag": 5.045354629437316, "time": 1591393321657.9204}, "geometry": { "type": "Point", "coordinates": [-76.5204143349946, 3.368107144879243, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aqgcve3e07", "mag": 5.042755192461941, "time": 1590576654297.3867}, "geometry": { "type": "Point", "coordinates": [-76.54896418158361, 3.348136186397617, 0] } },
        {"properties": {"contaminante": "pm10", "id":  "aht7peendo", "mag": 6.431741566114855, "time": 1590629928703.1838}, "geometry": { "type": "Point", "coordinates": [-76.54413909932414, 3.411779104625687, 0] } }       
    ]
};

const scale = [
    { name: 'Muy Dañino', col: 'rgb(255,81,77)' },
    { name: 'Muy Dañino', col: 'rgb(255,81,77)' },
    { name: 'Dañino', col: 'rgb(255,170,88)' },
    { name: 'Malo', col: 'rgb(209,201,91)' },
    { name: 'Moderado', col: 'rgb(148,204,138)' },
    { name: 'bueno', col: 'rgb(2,182,93)' }
];

let ROUTES = false;

const re_small = [
    ['El uso de bicicleta NO es adecuado en esta zona'],
    ['El uso de mascara es obligatorio debido a la mala calidad del aire'],
    ['Plante arboles, materas o busque opciones en el mercado que ayuden a purificar el aire de este espacio'],
    ['Procurar no hacer menos de 30 minutos de actividades al ire libre'],
    ['Esta es una ruta optima para el uso de bicicleta'],
    ['Este es un buen lugar para hacer deporte al aire libre']
];

//Creating map
mapboxgl.accessToken = 'pk.eyJ1IjoibGVpZGVyY2Fsdm8iLCJhIjoiY2s4MGNlbHZ4MGRwZzNlcGExMmo3cXF6YSJ9.V2d9VILjJixw_LEjcT7L9g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-76.50, 3.42, 0],
    zoom: 11,
});

//map controls
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'bottom-right');
//locate user
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);
//buscador
var coordinatesGeocoder = function (query) {
    // match anything which looks like a decimal degrees coordinate pair
    var matches = query.match(
        /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
    );
    if (!matches) {
        return null;
    }

    function coordinateFeature(lng, lat) {
        return {
            center: [lng, lat],
            geometry: {
                type: 'Point',
                coordinates: [lng, lat]
            },
            place_name: 'Lat: ' + lat + ' Lng: ' + lng,
            place_type: ['coordinate'],
            properties: {},
            type: 'Feature'
        };
    }

    var coord1 = Number(matches[1]);
    var coord2 = Number(matches[2]);
    var geocodes = [];

    if (coord1 < -90 || coord1 > 90) {
        // must be lng, lat
        geocodes.push(coordinateFeature(coord1, coord2));
    }

    if (coord2 < -90 || coord2 > 90) {
        // must be lat, lng
        geocodes.push(coordinateFeature(coord2, coord1));
    }

    if (geocodes.length === 0) {
        // else could be either lng, lat or lat, lng
        geocodes.push(coordinateFeature(coord1, coord2));
        geocodes.push(coordinateFeature(coord2, coord1));
    }

    return geocodes;
};
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        language: 'es',
        countries: 'co',
        //cities:'cali',
        //bbox: [-76.47, 3.30,-76.56, 3.55],
        localGeocoder: coordinatesGeocoder,
        zoom: 14,
        placeholder: 'Escribe una dirección. Ej: Autopista Sur',
        mapboxgl: mapboxgl
    })
    , 'top-left');

var leyenda = document.createElement('div');
leyenda.classList.add('leyenda');
leyenda.classList.add('mapboxgl-ctrl');
leyenda.innerHTML = `${createLeyends()}`;

function createLeyends() {
    let str = '';
    scale.forEach((e, i) => {
        str += i > 0 ? `<div class='row'><p>${e.name}</p><div style='background-color: ${e.col};'></div></div>` : '';
    })
    return str;
}


document.querySelector('.mapboxgl-ctrl-bottom-right').appendChild(leyenda);
map.on('load', function () {
    map.addSource('earthquakes', {
        'type': 'geojson',
        'data': `utils/dataCali${ROUTES?'2':''}.json`
    });

    listener('collection', 'routes', (doc)=>{
        let arr = [];
        doc.forEach(d=> arr.push(d.data()));
        arr[0].main && map.getSource('earthquakes').setData(Data2);
        /*map.addSource('earthquakes', {
            'type': 'geojson',
            'data': `utils/dataCali${arr[0].main?'2':''}.json`
        });*/
    });

    scale.forEach((e, index) => index > 0 && map.addLayer(hv(e.col, index + 1), 'waterway-label'));

    map.addLayer({
        'id': 'airQuality-circles',
        'type': 'circle',
        'source': 'earthquakes',
        'minzoom': 13,
        'paint': {
            // Size circle radius by earthquake magnitude and zoom level
            'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                7,
                ['interpolate', ['linear'], ['get', 'mag'], 1, 1, 6, 4],
                16,
                ['interpolate', ['linear'], ['get', 'mag'], 1, 5, 6, 10]
            ],
            // Color circle by earthquake magnitude
            'circle-color': [
                'interpolate',
                ['linear'],
                ['get', 'mag'],
                2,
                'rgb(255,81,77)',
                3,
                'rgb(255,81,77)',
                4,
                'rgb(255,170,88)',
                5,
                'rgb(209,201,91)',
                6,
                'rgb(148,204,138)',
                7,
                'rgb(2,182,93)'
            ],
            'circle-stroke-color': 'white',
            'circle-stroke-width': 0.5,
            // Transition from heatmap to circle layer by zoom level
            'circle-opacity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                8,
                0,
                10,
                1
            ]
        }
    },
        'waterway-label'
    );

    map.on('click', 'airQuality-circles', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        let index = Math.round(parseFloat(e.features[0].properties.mag)) - 2;
        var description = `<div class='s_rec'>
        <div class='row_color' style='background-color: ${scale[index].col};'></div>
        <h5 class='title' style='color: ${scale[index].col};'>${scale[index].name}</h5>
        <p>${re_small[index][0]}</p>
        </div>`;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'airQuality-circles', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'airQuality-circles', function () {
        map.getCanvas().style.cursor = '';
    });

    function hv(col, val) {
        return {
            'id': 'earthquakes-heat' + val,
            'type': 'heatmap',
            'source': 'earthquakes',
            'maxzoom': 20,
            'filter': [
                "all",
                [
                    ">=",
                    ["get", "mag"],
                    val
                ],
                [
                    "<",
                    ["get", "mag"],
                    val + 1
                ]
            ],
            'paint': {
                // Increase the heatmap weight based on frequency and property magnitude
                'heatmap-weight': [
                    'interpolate',
                    ['linear'],
                    ['get', 'mag'],
                    0,
                    0,
                    0.2,
                    0.5
                ],
                // Increase the heatmap color weight weight by zoom level
                // heatmap-intensity is a multiplier on top of heatmap-weight
                'heatmap-intensity': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    0,
                    1,
                    9,
                    5
                ],
                // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                // Begin color ramp at 0-stop with a 0-transparancy color
                // to create a blur-like effect.
                'heatmap-color': [
                    'interpolate',
                    ['linear'],
                    ['heatmap-density'],
                    0,
                    'rgba(33,102,172,0)',
                    0.2,
                    'rgba(103,169,207,0)',
                    0.4,
                    'rgba(209,229,240,0)',
                    0.6,
                    'rgba(253,219,199,0)',
                    0.8,
                    col,
                    1,
                    col
                ],
                // Adjust the heatmap radius by zoom level
                'heatmap-radius': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    0,
                    2,
                    9,
                    20
                ],
                // Transition from heatmap to circle layer by zoom level
                'heatmap-opacity': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    2,
                    1,
                    30,
                    0
                ]
            }
        }
    }
});

window.addEventListener('load', w => {
    var a = new Date();
    var dat = a.getDay() + ' /' + a.getMonth() + ' /' + a.getFullYear();
    date_today.innerText = dat;

    function getImg(toClose) {
        let img = document.createElement('img');
        img.classList.add('close');
        img.src = toClose ? "./images/close.svg" : "./images/community/up_rank.svg";
        img.onclick = toClose ? closeGenRec : openGenRec;
        return img;
    }

    function closeGenRec() {
        gen_rec.innerHTML = `<div class="row_color"></div>
        <div class="row" id='row_xclose'>
            <p id="date_today">${dat}</p>
        </div>`;
        let row = document.querySelector('#row_xclose');
        row.appendChild(getImg())
    }

    function openGenRec() {
        gen_rec.innerHTML = `<div class="row_color"></div>
        <div class="row" id='row_xclose'>
            <p id="date_today">${dat}</p>
        </div>

        <h5 class='title'>Recomendaciones</h5>

        <ul class="desc">
            <li>Evitar la exposición en las zonas del oriente de la ciudad, si vive en esta zona, evite abrir ventaas y puertas.</li>
            <li>En estos momentos parte del sur de la ciudad tiene un índice de calidad del aire bueno. Se puede transitar por la zona sin ninguna restricción</li>
            <li>Hacer uso de tapabocas si debe transitar por las zonas afectadas</li>
            <li>Los horarios pico son los momentos de mayor riesgo. Tomar rutas alternas a las zonas de alta contaminación</li>
        </ul>`;
        let row = document.querySelector('#row_xclose');
        row.appendChild(getImg(true))
    }

    var gen_rec = document.querySelector('.gen_rec');
    x_close_gen_Rec.onclick = closeGenRec;

})