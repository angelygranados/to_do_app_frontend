import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadTasks, deleteTask } from "../redux/actions/tasksActions";
import Spinner from "../components/common/Spinner";
import PropTypes from "prop-types";
import TasksList from "../components/TasksList";

const HomePage = ({ loadTasks, tasks, ...props }) => {
  const [task, setTask] = useState({ ...props.tasks });
  useEffect(() => {
    loadTasks().catch((error) => {
      alert("Failed load tasks" + error);
    });
  }, []);

  return tasks === undefined ? (
    <Spinner />
  ) : (
    <section className="home">
      <div className="title">
        <h2>Tasks List</h2>
        <div className="actions">
          <Link to={"/tasks/manage-tasks"} className="btn">
            Add New Task
          </Link>
          <Link to={"/users/"} className="btn return">
            VIEW USERS
          </Link>
        </div>
      </div>
      {Object.keys(tasks).length == 0 ? (
        <p>There are no tasks yet</p>
      ) : (
        <TasksList {...tasks} />
      )}
    </section>
  );
};

HomePage.propTypes = {
  loadTasks: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const tasks = state.tasksReducer.tasks;
  return {
    tasks,
  };
};

const mapDispatchToProps = {
  loadTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
