import { TodoDatasource } from '../../domain/datasources/todo.datasource';
import { CreateTodoDto, UpdateTodoDto } from '../../domain/dtos';
import { TodoEntity } from '../../domain/entities/todo.entity';
import { TodoRepository } from '../../domain/repositories/todo.repository';

export class TodoRepositoryImpl implements TodoRepository {
    constructor(
        private readonly dataSource: TodoDatasource
    ) {}

    create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        return this.dataSource.create( createTodoDto );
    }

    getAll(): Promise<TodoEntity[]> {
        return this.dataSource.getAll();
    }

    findById(id: number): Promise<TodoEntity> {
        return this.dataSource.findById( id );
    }

    updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
        return this.dataSource.updateById( updateTodoDto );
    }

    deleteById(id: number): Promise<TodoEntity> {
        return this.dataSource.deleteById( id );
    }
}