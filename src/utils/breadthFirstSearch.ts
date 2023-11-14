const mock = {
    a: "b,c",
    b: "d,c",
    c: "",
    d: "e",
    e: "true"
}

//TODO
export const breadthFirstSearch = (graph: {[key: string]: string} = mock, startPoint: string = "a", search: string = "true"): string => {
    const entries = Object.entries(graph);
    if (!entries.length) return "";
    const queue = [];
    const checked = [];
    queue.push(entries.find(entry => entry[0] === startPoint) || entries[0]);

    while (queue.length > 0) {
        const oldest = queue.shift();
        if (checked.includes(oldest[0])) continue;
        if (oldest?.includes(search)) {
            return oldest;
        }
        checked.push(oldest[0]);
    }

    return "";
}

// Поиск в ширину
// 1. Выбираем стартовый узел
// 2. Создаем очередь
// 3. создаем список проверенных узлов
// 4. помещаем все соседние узлы от стартового в очередь
// 5. цикл: пока очередь не пуста, проверяем каждый узел и если он не является целевым,
// удаляем его из очереди, добавляем все его соседние узлы в очередь