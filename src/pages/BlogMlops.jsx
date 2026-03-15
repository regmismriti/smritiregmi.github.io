import { Link } from 'react-router-dom'
import { FaArrowLeft, FaUser, FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa'

export default function BlogMlops() {
  return (
    <div className="bp">
      <nav className="bp-nav">
        <Link to="/" className="bp-back"><FaArrowLeft /> Back to Portfolio</Link>
        <span className="bp-logo">&lt;SR/&gt;</span>
      </nav>

      <article className="bp-content">
        <span className="bp-cat">MLOps</span>
        <h1 className="bp-title">MLOps Best Practices: From Experiment to Production</h1>
        <div className="bp-meta">
          <span><FaUser /> Smriti Regmi</span>
          <span><FaCalendarAlt /> April 3, 2025</span>
          <span><FaClock /> 15 min read</span>
          <span><FaTag /> MLOps, MLflow, Docker, CI/CD</span>
        </div>

        <div className="bp-body">
          <p>Every ML project starts beautifully in a Jupyter notebook. Then reality hits: the model needs to serve predictions at scale, retrain on new data, handle distribution shift, and never go down in production. This is where <strong>MLOps</strong> becomes your survival toolkit.</p>

          <div className="bp-callout">
            <strong>🎯 Stack we'll use:</strong> MLflow · DVC · FastAPI · Docker · GitHub Actions · Prometheus + Grafana
          </div>

          <h2>1. Experiment Tracking with MLflow</h2>
          <pre><code>{`import mlflow
import mlflow.sklearn

mlflow.set_experiment("text-classification-v2")

with mlflow.start_run(run_name="gbm-baseline") as run:
    mlflow.log_params({
        "n_estimators": 200,
        "max_depth": 5,
        "learning_rate": 0.05
    })

    model = GradientBoostingClassifier(n_estimators=200)
    model.fit(X_train, y_train)

    mlflow.log_metrics({
        "val_f1": f1_score(y_val, y_pred, average="weighted"),
    })

    mlflow.sklearn.log_model(model, "model")`}</code></pre>

          <h2>2. Data Versioning with DVC</h2>
          <pre><code>{`dvc init
dvc add data/raw/train.csv
dvc remote add -d myremote s3://my-ml-bucket/datasets
dvc push`}</code></pre>

          <h2>3. Model Serving with FastAPI</h2>
          <pre><code>{`from fastapi import FastAPI
import mlflow

app = FastAPI()
model = mlflow.sklearn.load_model("models:/text-classifier/Production")

@app.post("/predict")
async def predict(request: PredictionRequest):
    proba = model.predict_proba([request.text])[0]
    return {"label": model.classes_[proba.argmax()], "confidence": float(proba.max())}`}</code></pre>

          <h2>4. CI/CD with GitHub Actions</h2>
          <pre><code>{`# .github/workflows/ml-pipeline.yml
name: ML Pipeline
on:
  push:
    branches: [main]

jobs:
  train-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run DVC pipeline
        run: dvc repro
      - name: Evaluate model
        run: python src/evaluate.py --threshold 0.85
      - name: Deploy to staging
        if: success()
        run: |
          docker build -t classifier:${'$'}{{ github.sha }} .
          kubectl set image deployment/classifier classifier=...:${'$'}{{ github.sha }}`}</code></pre>

          <h2>The MLOps Maturity Model</h2>
          <ul>
            <li><strong>Level 0:</strong> Manual ML — scripts, notebooks, manual deployment</li>
            <li><strong>Level 1:</strong> ML pipeline automation — training pipelines automated, CT enabled</li>
            <li><strong>Level 2:</strong> CI/CD for ML — automated training, evaluation, deployment, and A/B testing</li>
          </ul>

          <h2>Common Pitfalls</h2>
          <ul>
            <li><strong>Training-serving skew:</strong> Package preprocessing with the model</li>
            <li><strong>Ignoring data drift:</strong> Monitor input distributions, not just outputs</li>
            <li><strong>No rollback strategy:</strong> Always keep previous model versions in the registry</li>
            <li><strong>Over-engineering early:</strong> Start simple, add complexity only when needed</li>
          </ul>

          <blockquote>
            The best MLOps system is the one your team will actually use. Start with MLflow tracking and one automated test. Build from there.
          </blockquote>
        </div>

        <div className="bp-author">
          <div className="bp-avatar">SR</div>
          <div>
            <p className="bp-author-name">Smriti Regmi</p>
            <p className="bp-author-bio">AI Researcher & ML Engineer with a focus on production ML systems and MLOps. Believes that great models deserve great engineering to reach their full potential.</p>
          </div>
        </div>
      </article>
    </div>
  )
}
