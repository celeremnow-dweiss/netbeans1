/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function test()
{


var x = 5;
var y = 6;

alert(x*y);
};

function DissolveTwoGeomsWithJSTS(wkt1, wkt2)
{
    // Instantiate JSTS WKTReader and get two JSTS geometry objects
    var wktReader = new jsts.io.WKTReader();
    var geom1 = wktReader.read(wkt1);
    var geom2 = wktReader.read(wkt2);

    // In JSTS, "union" is synonymous with "dissolve"
    var dissolvedGeometry = geom1.union(geom2);

    /* Since 'union()' is a method of a JSTS geometry object, you
       could easily modify this method to iterate over an array
       of JSTS geometry objects, calling a 'union()' on each 
       sequential object. */

    // Instantiate JSTS WKTWriter and get new geometry's WKT
    var wktWriter = new jsts.io.WKTWriter();
    var wkt = wktWriter.write(dissolvedGeometry);

    return wkt;
    alert(wkt);
}