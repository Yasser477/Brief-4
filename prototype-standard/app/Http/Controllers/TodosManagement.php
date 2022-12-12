<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class TodosManagement extends Controller
{
    //
    public function index()
    {
        $todo = Todo::all();
        return response()->json($todo);
    }
    public function show($id)
    {
        $todo = Todo::where('id', $id)->get();
        return response()->json([
            "success" => 200,
            "todo" => $todo

        ]);
    }
    public function addTodos(Request $req)
    {
        $todo = new Todo();
        $todo->name = $req->input("name");
        $todo->save();
        return response()->json($todo);
    }
    public function todoEdit(Request $req, $id)
    {
        $todo = (Todo::where('id', $id)->get())[0];
        $todo->name = $req->input('name');
        $todo->save();
        return response()->json($todo);
    }
}
