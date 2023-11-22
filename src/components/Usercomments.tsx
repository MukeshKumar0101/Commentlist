/** @format */

import React, { useState } from "react";
import { useAtom } from "jotai";
import Listofcomments from "./Listofcomments";
import { CommentType } from "./Commenttype";
import { commentStore } from "./global-state";

export default function Usercomments() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [arror, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [commentError, setCommentError] = useState("");
  const [list, setList] = useAtom(commentStore);
  // <
  // {

  //   name: string;
  //   email: string;
  //   comment: string;
  // }

  //   CommentType []
  // >([]);

  return (
    <div className="border-2 bg-[#22343D] px-2 py-2 w-[400px]">
      <h1 className="font-bold text-white py-2">User Comments</h1>
      <div className="flex flex-col gap-2">
        <input
          value={name}
          onChange={(event) => {
            let a = event.target.value;
            setName(a);

            setNameError("");
          }}
          type="text"
          name=""
          id=""
          placeholder="Enter Your Name"
          className="border-2 border-black h-10 w-96 rounded-lg bg-purple-100 placeholder:text-black px-2"
        />
        <div className="Please fill your name text-red-500 text-sm">
          {nameError}
        </div>
        <input
          value={email}
          onChange={(event) => {
            let a = event.target.value;
            setEmail(a);
            let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
            let result = regex.test(a);
            if (result) {
              setEmailError("");
            }
          }}
          type="text"
          name=""
          id=""
          placeholder="Email"
          className="border-2 border-black h-10 w-96 rounded-lg bg-purple-100 placeholder:text-black px-2"
        />
        <div className="text-sm text-red-500">{emailError}</div>
        <textarea
          value={comment}
          onChange={(event) => {
            let a = event.target.value;
            setComment(a);
            let comment = a;
            if (comment === a) {
              setCommentError("");
            }
          }}
          name=""
          id=""
          placeholder="Comments"
          className="border-2 border-black h-24 w-96 rounded-lg bg-purple-100 placeholder:text-black   px-2"
        />
      </div>
      <div className="text-red-600">{commentError}</div>
      <div className="text-red-600">{arror}</div>
      <button
        onClick={() => {
          let name1 = name.trim();
          let email1 = email.trim();
          let comment1 = comment.trim();
          console.log("helo", name1);
          let invalid = name1 != "" && email1 != "" && comment1 != "";
          let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
          let result = regex.test(email);
          if (invalid && result) {
            const add: CommentType = {
              id: Math.random(),
              name: name1,
              email: email1,
              comment: comment1,
            };

            setList([...list, add]);
            setComment("");
            setEmail("");
            setName("");
            setError("");
            setEmailError("");
          } else {
            // email != "" && setError("Please fill all information");

            email1 == "" && setEmailError("Please fill correct email");
            name1 == "" && setNameError("fill you name");
            comment1 == "" && setCommentError("fill you comment");
          }
        }}
        className="bg-blue-400 px-2 py-2 text-white  my-2 hover:bg-blue-800">
        Add Comment
      </button>
      {list.map((comment) => {
        return (
          <div className="my-3">
            <Listofcomments
              name={comment.name}
              email={comment.email}
              comment={comment.comment}
              onDelete={() => {
                let a = list.filter((v) => {
                  return v.id != comment.id;
                });
                console.log(a);
                console.log(comment);
                setList(a);
              }}
            />
            {/* <div>{e.name}</div>
            <div>{e.email}</div>
            <div>{e.comment}</div> */}
          </div>
        );
      })}
      <div>
        {/* <Listofcomments name="Mukesh" email="iammk00099@gmail.com" comment="hello"/> */}
      </div>
    </div>
  );
}
