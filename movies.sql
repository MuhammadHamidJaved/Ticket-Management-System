
-- Creating tables for the Ticket Management System - Movies

-- Table for storing movie details
CREATE TABLE Movies (
    movie_id INT PRIMARY KEY identity(1,1),
    title VARCHAR(100) NOT NULL,
    genre VARCHAR(50),
	theaterName varchar(30),
    release_date DATE default getDate(),
    duration_minutes INT default 90,
    rating DECIMAL(3,1) default 3.5,
	link varchar(1000)
);
--drop table Movies

select * from Movies
select * from Users;

delete from Movies 
where movie_id=20
delete from Users
where UserID between 1 and 20;
-- Inserting additional sample data into Movies table
INSERT INTO Movies (movie_id, title, genre , theaterName , release_date, duration_minutes, rating, link)
VALUES
   (6, 'Inception', 'Sci-Fi','imax', '2010-07-16', 148, 8.8,'https://images.bauerhosting.com/legacy/empire-tmdb/films/27205/images/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80'),
   (7, 'The Matrix','Sci-Fi','fox', '1999-03-31', 136, 8.7,'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/matrix-4-neo-and-trinity.webp'),
    (8, 'The Lord of the Rings: The Return of the King','Adventure','fox', '2003-12-17', 201, 8.9,'https://d1nslcd7m2225b.cloudfront.net/Pictures/1024x536/4/7/7/1252477_fellowship.jpg'),
    (10, 'Goodfellas', 'Crime','national', '1990-09-21', 146, 8.7,'https://m.media-amazon.com/images/S/pv-target-images/fe6b793bf60b84da00167ef63647b54f577d616bae1a2451048e80b25f661683.jpg') 
	


-- Inserting additional sample data into Movies table
INSERT INTO Movies ( title, genre , theaterName , release_date, duration_minutes, rating, link)
VALUES
   ('AVATAR','Sci-Fi','imax','2009-04-15',180,8.0,'https://comicyears.com/wp-content/uploads/2020/08/avatar.jpg'),
   ('ARRIVAL','Sci-Fi','fox', '2016-09-16', 160, 8.9,'https://hips.hearstapps.com/hmg-prod/images/mv5bmtexmzu0odcxndheqtjeqwpwz15bbwu4mde1oti4mzay-v1-1589813214.jpg?crop=1xw:0.960205078125xh;center,top&resize=980:*'),
   ('AVENGERS','Sci-Fi','national', '2021-10-11',190,9.9,'https://www.sify.com/wp-content/uploads/2022/06/marvel_avengers_poster1.jpg'),
  ( 'Inception', 'Sci-Fi','imax', '2010-07-16', 148, 8.8,'https://images.bauerhosting.com/legacy/empire-tmdb/films/27205/images/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80'),
   ( 'The Matrix','Sci-Fi','fox', '1999-03-31', 136, 8.7,'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/matrix-4-neo-and-trinity.webp'),
    ('The Lord of the Rings: The Return of the King','Adventure','fox', '2003-12-17', 201, 8.9,'https://d1nslcd7m2225b.cloudfront.net/Pictures/1024x536/4/7/7/1252477_fellowship.jpg'),
    ( 'Goodfellas', 'Crime','national', '1990-09-21', 146, 8.7,'https://m.media-amazon.com/images/S/pv-target-images/fe6b793bf60b84da00167ef63647b54f577d616bae1a2451048e80b25f661683.jpg') ,
	('LOVE AGAIN','Romance','imax','2009-04-15',180,8.1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvz1i12w2kW-b9irbPlsLfLvDHd4w6NREDQ&usqp=CAU'),
	('LOVE AT FIRST SIGHT','Romance','fox','2023-05-10',170,8.4,'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd79tADlWD8CdH8XifaHBRQtm-bm8iS9niAVSwoITLXyQbHZ3xHmRq8Y7vpm7g-2gfiq2whw2hhyI9YajCyFe2jE_24tg6gNktNamvDmlMhlgJtlosOAjxw-Xc9tFogiqAer.jpg?r=dfa'),
	('THE FAULT IN OUR STARS','Romance','national','2014-02-12',145,7.8,'https://i.ytimg.com/vi/9ItBvH5J6ss/maxresdefault.jpg'),
	('DEATH FIGHTER','Action','imax','2017-03-15',130,8.1,'https://i.ytimg.com/vi/nBN8IwViyag/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCtp3JN-u7U1VKJIX8lHdTeq8mqLg'),
	('JOHN WICK','Action','fox','2023-09-15',130,7.5,'https://www.syfy.com/sites/syfy/files/2019/05/john-wick-2017-image-3840x2400.jpg'),
	('WAR','Action','imax','2019-03-11',130,9.1,'https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/2:3/w_2560%2Cc_limit/must-watch%2520action%2520movies.jpg'),
	('PIRATES OF CARRIBEAN','Adventure','fox', '2005-12-17', 139, 8.9,'https://static.javatpoint.com/top10-technologies/images/top-10-adventure-movies5.png'),
	('JUMANJI','Adventure','imax', '2019-12-7', 131, 9.4,'https://resizing.flixster.com/yHQF35g-bKHGdCx3TabyifPMWew=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13499680_p_v12_bg.jpg')


	create procedure InsertMovie 
	@titl varchar(100),
	@genre varchar(50),
	@theater varchar(30),
	@link varchar(1000)
	as begin 
		insert into Movies (title,genre,theaterName,link)
		values
		(@titl,@genre,@theater,@link);
		
	end

	exec InsertMovie @titl='DOCTOR WHO' , @link='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBI1DFbgtwS4KkNC9VzvE53XpTOoa4l-NyM1Wsi_gug&s',
	@theater='imax', @genre='Sci-Fi'

	--drop procedure InsertMovie