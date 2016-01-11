
select t.name as team,
count(*),
pts_tbl.points,
ifnull(L2W.l2w_count, 0) as l2w,
-- ifnull(D2W.d2w_count, 0) as d2w,
ifnull(L2D.l2d_count, 0) as l2d,
ifnull(W2D.w2d_count, 0) as w2d,
-- ifnull(D2L.d2l_count, 0) as d2l,
ifnull(W2L.w2l_count, 0) as w2l

from performances p
join games g on p.game_id = g.id
join teams t on t.id = p.team_id

join (
  select t.id as team_id, p.points as points
  from performances p
  join games g on p.game_id = g.id
  join teams t on t.id = p.team_id
  where g.season=20152016
  and p.week=20
) pts_tbl on pts_tbl.team_id = t.id

left join (
  select t.id as team_id, count(*) as l2w_count
  from performances p
  join games g on p.game_id = g.id
  join teams t on t.id = p.team_id
  where g.season=20152016
  and p.odds_result = 'L'
  and p.ft_result = 'W'
  group by t.id
) L2W on L2W.team_id = t.id

-- left join (
--   select t.id as team_id, count(*) as d2w_count
--   from performances p
--   join games g on p.game_id = g.id
--   join teams t on t.id = p.team_id
--   where g.season=20152016
--   and p.odds_result = 'D'
--   and p.ft_result = 'W'
--   group by t.id
-- ) D2W on D2W.team_id = t.id

left join (
  select t.id as team_id, count(*) as l2d_count
  from performances p
  join games g on p.game_id = g.id
  join teams t on t.id = p.team_id
  where g.season=20152016
  and p.odds_result = 'L'
  and p.ft_result = 'D'
  group by t.id
) L2D on L2D.team_id = t.id

left join (
  select t.id as team_id, count(*) as w2d_count
  from performances p
  join games g on p.game_id = g.id
  join teams t on t.id = p.team_id
  where g.season=20152016
  and p.odds_result = 'W'
  and p.ft_result = 'D'
  group by t.id
) W2D on W2D.team_id = t.id

-- left join (
--   select t.id as team_id, count(*) as d2l_count
--   from performances p
--   join games g on p.game_id = g.id
--   join teams t on t.id = p.team_id
--   where g.season=20152016
--   and p.odds_result = 'D'
--   and p.ft_result = 'L'
--   group by t.id
-- ) D2L on D2L.team_id = t.id

left join (
  select t.id as team_id, count(*) as w2l_count
  from performances p
  join games g on p.game_id = g.id
  join teams t on t.id = p.team_id
  where g.season=20152016
  and p.odds_result = 'W'
  and p.ft_result = 'L'
  group by t.id
) W2L on W2L.team_id = t.id

where g.season=20152016
and g.ft_result <> g.odds_result
group by t.id
order by pts_tbl.points desc
;








select h.name,
a.name,
hp.ft_goals,
ap.ft_goals,
g.ft_result,
g.odds_result

from games g
join performances hp on hp.id = g.home_id
join performances ap on ap.id = g.away_id
join teams h on h.id=hp.team_id
join teams a on a.id=ap.team_id

where g.season=20152016
and g.ft_result <> g.odds_result;
