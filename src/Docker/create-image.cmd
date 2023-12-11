docker build --no-cache -f SQL\Dockerfile.PostgreSql -t krnovyjj/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t krnovyjj/app ../..
