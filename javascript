// function copied from elrobis using is to learn how JSTS works

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
}
