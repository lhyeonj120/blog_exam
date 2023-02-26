<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@page import="java.util.*" %>
<%@page import="net.sf.json.*" %>
<%
	String writer = request.getParameter("writer");
	String title = request.getParameter("title");
	String content = request.getParameter("content");
%>

{
	"writer": "<%= writer %>",
	"title": "<%= title %>",
	"content": "<%= content %>"
}