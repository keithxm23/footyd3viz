import sqlite3
import json

conn = sqlite3.connect('../matchdb.db')
c = conn.cursor()

sql = """
select h.name, a.name, hp.ft_goals, ap.ft_goals, g.ft_result, g.odds_result
from games g
join performances hp on hp.id = g.home_id
join performances ap on ap.id = g.away_id
join teams h on h.id=hp.team_id
join teams a on a.id=ap.team_id

where g.season=20152016
and g.ft_result <> g.odds_result;
"""

c.execute(sql)
results = c.fetchall()
conn.close()


HOME_MAP = {'AH':'l2w', 'AD':'l2d', 'HD':'w2d', 'HA':'w2l'}
AWAY_MAP = {'HA':'l2w', 'HD':'l2d', 'AD':'w2d', 'AH':'w2l'}

output = {}
for r in results:
    output.setdefault(r[0], {})
    output.setdefault(r[1], {})
    key = r[5] + r[4]
    home_key = HOME_MAP[key]
    away_key = AWAY_MAP[key]
    output[r[0]].setdefault(home_key, [])
    output[r[1]].setdefault(away_key, [])
    output[r[0]][home_key].append(r)
    output[r[1]][away_key].append(r)


with open('results.json', 'w') as fp:
    json.dump(output, fp)
