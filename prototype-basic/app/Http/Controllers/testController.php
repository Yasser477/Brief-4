<?php

namespace App\Http\Controllers;
use App\Models\test1;
use Illuminate\Http\Request;

class testController extends Controller
{
    //
    public function store(Request $request){
        $brief = new test1;
        $brief->firstname = $request->firstname;
        $brief->lastname = $request->lastname;
        $brief->email = $request->email;
        $brief->save();
        return response()->json($brief);
    }
    public function select(){
        $briefs = test1::all();
        return response()->json($briefs);
    }

    public function destroy($id){
        $brief = test1::find($id);
        $brief->delete();
        return response()->json($brief);
    }

    public function edit($id){
        $brief = test1::find($id);
        return response()->json($brief);
    }

    public function update(Request $request,$id){
        $brief = test1::find($id);
        $brief->firstname = $request->firstname;
        $brief->lastname = $request->lastname;
        $brief->email = $request->email;
        $brief->save();
        return $brief;
    }
}
